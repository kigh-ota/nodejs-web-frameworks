/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {Object} options 
 */
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return {hello: 'world'}
  })
}

module.exports = routes
