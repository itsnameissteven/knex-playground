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
  getAllPerson(_fastify: any): RouteShorthandOptions {
    return {
      // onRequest(req: any, reply: any, next: any) {
      //   return { fastify, req, reply, next };
      // },
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
  createPerson(fastify: any): RouteShorthandOptions {
    return {
      onRequest(req: any, reply: any, next: any) {
        console.log(req);
        return { fastify, req, reply, next };
      },
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
