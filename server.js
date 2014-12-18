var mongoose = require('mongoose');
var service = require("soa-example-core-service");
var config = require("soa-example-service-config").config();

var permissionsController = require('./controllers/PermissionsController');

mongoose.connect(config.mongoUri);

var app = service.createApiServer(config.userServicePort);

app.get('/permissions', service.ensureAuthenticated, permissionsController.getPermissions);