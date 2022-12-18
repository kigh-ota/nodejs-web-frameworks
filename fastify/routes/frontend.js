import fastifyStatic from '@fastify/static'

export default async function frontend(fastify, opts) {
  fastify.addHook('onRequest', (request, reply, done) => {
    if (!request.session.authenticated) {
      reply.redirect('/login')
    }
    done()
  })

  fastify.get('/', (request, reply) => {
    reply.type('text/html')
    reply.send(defaultPage())
  });

  function defaultPage () {
    return 'logged in<br><br><a href="/logout">Logout</a>'
  }
}