import Fastify from 'fastify'
import fastifyFormbody from '@fastify/formbody'
import authorization from './authorization.js'

const fastify = Fastify({logger: true})

// Plugins
fastify.register(fastifyFormbody)
fastify.register(authorization)

// Routes
fastify.get('/', (request, reply) => {
  reply.type('text/html')
  reply.send(defaultPage(request.session.authenticated))
});

// Start
fastify.listen({port: 3000}, (err, address) =>{
  if(err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

function defaultPage (isAuthenticated) {
  if (isAuthenticated) {
    return 'logged in<br><br><a href="/logout">Logout</a>'
  } else {
    return 'please login<br><br><a href="/login">Login</a>'
  }
}
