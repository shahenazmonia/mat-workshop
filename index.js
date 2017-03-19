var hapi = require('hapi');
var server = new hapi.Server();
server.connection({
  port: 8080
})

server.register(require('inert'),function(err){

  if (err){
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (req,reply) {
      reply.file('index.html')

    }
  })

})

server.start();
