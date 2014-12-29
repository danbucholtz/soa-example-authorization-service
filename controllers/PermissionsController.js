var loggerServiceApi = require('soa-example-logging-service-api');

var getPermissions = function(req, res){

	loggerServiceApi.debug(req.user.accessToken, "User [" + req.user.emailAddress + "] loading permissions ...");

	var permissionsObject = {
		applications: [
			{
				bradyWorkstation: {
					appRead: true,
					appWrite: true,
					appDelete: true,
					settingsRead: true,
					settingsWrite: true,
					settingsDelete: true,
					activateLicense: true,
					print: true
				}
			},
			{
				newBradyApp: {
					usersRead: true,
					usersWrite: true,
					usersDelete: true,
					devicesRead: true,
					devicesWrite: true,
					devicesDelete: true,
					print: true
				}
			}
		]
	};

	loggerServiceApi.debug(req.user.accessToken, "User [" + req.user.emailAddress + "] loading permissions ... Success");

	res.send(permissionsObject);
	
};

module.exports = {
	getPermissions: getPermissions
}
