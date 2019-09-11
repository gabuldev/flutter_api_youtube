const {Route} = require("./src/routes/route");
var restify = require('restify');

//SERVER CONFIG
var server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
Route.init(server);

