/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {Object} options 
 */
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    request.log.info({foo: request.cookies.foo, baz: request.cookies.baz, bar: request.cookies.bar, unsignedBar: request.unsignCookie(request.cookies.bar)});
    reply.setCookie("foo", "foo", {
      domain: 'example.com',
      path: '/'
    })
    .cookie('baz', 'baz') // alias for setCookie
    .setCookie('bar', 'bar', {
      path: '/',
      signed: true
    })
    return {hello: 'world'}
  })
}

module.exports = routes
