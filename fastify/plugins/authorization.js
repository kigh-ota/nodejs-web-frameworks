import fastifyCookie from '@fastify/cookie'
import fastifySession from '@fastify/session'
import fp from 'fastify-plugin'

async function authorization(fastify, opts) {
  fastify.register(fastifyCookie)
  fastify.register(fastifySession, {
    secret: '12345678901234567890123456789012',
    cookie: { secure: false },
    expires: 1800000
  })

  // route for login page
  fastify.get('/login', (request, reply) => {
    reply.type('text/html')
    reply.send(loginPage())
  })

  // add a login route that handles the actual login
  fastify.post('/login', (request, reply) => {
    const { email, password } = request.body

    if (password === 'abcdef') {
      request.session.authenticated = true
      reply.redirect('/')
    } else {
      reply.redirect(401, '/login')
    }
  });

  // route for logout
  fastify.get('/logout', (request, reply) => {
    if (request.session.authenticated) {
      request.session.destroy((err) => {
        if (err) {
          reply.status(500)
          reply.send('Internal Server Error')
        } else {
          reply.redirect('/')
        }
      })
    } else {
      reply.redirect('/')
    }
  });

  function loginPage () {
    return '<html>' +
      '<head><title>Login</title></head>' +
      '<body>' +
      '<h1>Login</h1>' +
      '<form action="http://localhost:3000/login" method="post">' +
      '<h2>Email</h2>' +
      '<input type="email" name="email">' +
      '<h2>Password</h2>' +
      '<input type="password" name="password">' +
      '<br><br><button type="submit">Login</button>' +
      '</form>' +
      '</body>' +
      '</html>'
  }
}

export default fp(authorization, {name: 'authorization'})
