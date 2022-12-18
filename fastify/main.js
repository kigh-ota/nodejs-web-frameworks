import Fastify from 'fastify'
import fastifyFormbody from '@fastify/formbody'
import authorization from './plugins/authorization.js'
import frontend from './routes/frontend.js'

const fastify = Fastify({logger: true})

// Plugins
fastify.register(fastifyFormbody)
fastify.register(authorization)

// Routes
fastify.register(frontend)

// Start
fastify.listen({port: 3000}, (err, address) =>{
  if(err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
