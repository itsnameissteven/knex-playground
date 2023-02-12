import { FastifyRequest, FastifyReply } from 'fastify';
import Person from '../models/person.model';
import personService from '../service/person';

// type Request = FastifyRequest<{
//   Params: { id: string };
// }>;

type PostPerson = FastifyRequest<{
  Body: { firstName: string; lastName: string; email: string };
}>;

class PersonController {
  async getAllPersons(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const persons = await personService.getAllPersons();
      return reply.status(200).send({
        message: 'success',
        data: persons,
        count: persons.length,
      });
    } catch (error) {
      return reply.status(500).send({ error });
    }
  }
  async createPerson(req: PostPerson, res: FastifyReply) {
    try {
      const id = await personService.createPerson(req.body);
      return res.status(201).send(id);
    } catch (error) {
      res.status(501).send({ error: 'that not right' });
    }
  }
}

const personController = new PersonController();

export default personController;
