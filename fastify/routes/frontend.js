import fastifyStatic from '@fastify/static'
import {join} from 'desm'

export default async function frontend(fastify, opts) {
  fastify.addHook('onRequest', (request, reply, done) => {
    if (!request.session.authenticated) {
      reply.redirect('/login')
    }
    done()
  })

  await fastify.register(fastifyStatic, {
    root: join(import.meta.url, '..', 'public'),
    prefix: '/public'
  })

  fastify.get('/', (request, reply) => {
    reply.type('text/html')
    reply.send(defaultPage())
  });

  function defaultPage () {
    return 'logged in<br><br><a href="/logout">Logout</a>'
  }
}