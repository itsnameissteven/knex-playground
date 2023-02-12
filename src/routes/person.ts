import { FastifyPluginAsync } from 'fastify';
import personController from '../controllers/person.controller';
import personValidation from '../validation/person.validation';

const devices: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    '/person',
    personValidation.getAllPerson(fastify),
    personController.getAllPeople
  );

  fastify.post<{
    Body: { firstName: string; lastName: string; email: string };
  }>(
    '/person',
    personValidation.createPerson(fastify),
    personController.createPerson
  );
};

export default devices;
