const personService = require('../service/person');
import { FastifyRequest, FastifyReply } from 'fastify';
import Person from '../models/person.model';

// type Request = FastifyRequest<{
//   Params: { id: string };
// }>;

type PostPerson = FastifyRequest<{
  Body: { firstName: string; lastName: string; email: string };
}>;

// type getRequest = FastifyRequest<{
//   Querystring: IQuerystring;
// }>;

// const optionKeys = {
//   lastEdited: 'updatedAt',
//   name: 'name',
//   vendor: 'vendor.name',
//   type: 'deviceType.name',
// };

class PersonController {
  async getAllPeople(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const persons = await Person.query().returning('*');

      return reply.status(200).send({
        message: 'success',
        data: persons,
        count: persons.length,
      });
    } catch (error) {
      console.log(`error`, error);
      return reply.status(500).send({ error });
    }
  }
  async createPerson(req: PostPerson, res: FastifyReply) {
    console.log('asdfkasdfasdf');
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).send(id);
    } catch (error) {
      res.status(501).send({ error: 'that not right' });
    }
  }
}

// export const postPerson = async (req: PostPerson, reply: FastifyReply) => {
//   try {
//     const person = await person.query().insert(req.body).withGraphFetched({
//       vendor: true,
//       deviceType: true,
//     });

//     if (!device) {
//       return reply.status(400).send({ error: 'Something went wrong' });
//     }

//     return reply.status(201).send({ message: 'success', data: device });
//   } catch (error) {
//     console.log(`error`, error);
//     return reply.status(500).send({ error });
//   }
// };

// export const updateDevice = async (req: any, reply: FastifyReply) => {
//   try {
//     const device = await Device.query()
//       .findById(req.params.id!)
//       .patch(req.body)
//       .withGraphFetched({
//         vendor: true,
//         deviceType: true,
//         softwareReleases: true,
//       })
//       .returning('*');

//     if (!device) {
//       const newDevice = await Device.query().insert(req.body);

//       return reply.status(201).send({ message: 'success', data: newDevice });
//     }

//     return reply.status(200).send({ message: 'success', data: device });
//   } catch (error) {
//     console.log(`error`, error);
//     return reply.status(500).send({ error });
//   }
// };

// export const deleteDevice = async (req: Request, reply: FastifyReply) => {
//   const { id } = req.params;

//   try {
//     const device = await Device.query().deleteById(id!);

//     if (!device) {
//       return reply
//         .status(404)
//         .send({ error: `Could not find device type with id ${id}.` });
//     }

//     return reply.status(200).send({
//       message: `Item ${id} was successfully deleted.`,
//     });
//   } catch (error) {
//     console.log(`error`, error);
//     return reply.status(500).send({ error });
//   }
// };
const personController = new PersonController();

export default personController;
