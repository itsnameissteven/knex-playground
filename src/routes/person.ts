import { FastifyPluginAsync } from 'fastify';
import personController from '../controllers/person.controller';
import personValidation from '../validation/person.validation';

const person: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get(
    '/person',
    personValidation.getAllPersons(fastify),
    personController.getAllPersons
  );

  fastify.post<{
    Body: { firstName: string; lastName: string; email: string };
  }>(
    '/person',
    personValidation.createPerson(fastify),
    personController.createPerson
  );
};

export default person;
