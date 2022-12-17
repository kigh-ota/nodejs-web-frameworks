const fastify = require('fastify')({logger: true})

fastify.register(require('./our-first-route'))

fastify.listen({port: 3000}, (err, address) =>{
  if(err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
