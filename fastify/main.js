const fastify = require('fastify')({logger: true})

// Plugins
fastify.register(require('@fastify/formbody'))
fastify.register(require('@fastify/cookie'))
fastify.register(require('@fastify/session'), {
  secret: '12345678901234567890123456789012',
  cookie: { secure: false },
  expires: 1800000
})

// Routes
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
fastify.get('/', (request, reply) => {
  reply.type('text/html')
  reply.send(defaultPage(request.session.authenticated))
});
fastify.get('/logout', (request, reply) => {
  if (request.session.authenticated) {
    request.destroySession((err) => {
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

// Start
fastify.listen({port: 3000}, (err, address) =>{
  if(err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

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

function defaultPage (isAuthenticated) {
  if (isAuthenticated) {
    return 'logged in<br><br><a href="/logout">Logout</a>'
  } else {
    return 'please login<br><br><a href="/login">Login</a>'
  }
}