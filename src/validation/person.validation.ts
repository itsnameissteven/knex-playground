import { RouteShorthandOptions } from 'fastify';
export const person = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
    id: { type: 'string' },
    email: { type: 'string' },
  },
};

class PersonValidation {
  getAllPersons(_fastify: any): RouteShorthandOptions {
    return {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              message: { type: 'string' },
              data: { type: 'array', items: person },
              count: { type: 'number' },
            },
          },
        },
      },
    };
  }
  createPerson(_fastify: any): RouteShorthandOptions {
    return {
      schema: {
        response: {
          200: {
            type: 'string',
          },
        },
      },
    };
  }
}

const personValidation = new PersonValidation();

export default personValidation;
