import fastify from 'fastify'
import fastifyFormbody from '@fastify/formbody'
import authorization from './plugins/authorization'
import frontend from './routes/frontend'

const server = fastify({ logger: true })

// Plugins
server.register(fastifyFormbody)
server.register(authorization)

// Routes
server.register(frontend)

// Start
server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
