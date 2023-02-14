import { FastifyPluginAsync } from 'fastify';
// Declare a route

const root: FastifyPluginAsync = async function (fastify, _opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true };
  });
};

export default root;
