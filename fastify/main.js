const fastify = require('fastify')({logger: true})

// Plugins
fastify.register(require('@fastify/cookie'), {
  secret: "my-secret",
  hook: "onRequest",
  parseOptions:{}
})

// Routes
fastify.register(require('./our-first-route'))

fastify.listen({port: 3000}, (err, address) =>{
  if(err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
