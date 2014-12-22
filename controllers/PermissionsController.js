var getPermissions = function(req, res){

	var permissionsObject = {
		applications: [
			bradyWorkstation: {
				appRead: true,
				appWrite: true,
				appDelete: true,
				settingsRead: true,
				settingsWrite: true,
				settingsDelete: true,
				activateLicense: true,
				print: true
			},
			newBradyApp: {
				usersRead: true,
				usersWrite: true,
				usersDelete: true,
				devicesRead: true,
				devicesWrite: true,
				devicesDelete: true,
				print: true
			}
		]
	};

	res.send(permissionsObject);
	
};

module.exports = {
	getPermissions: getPermissions
}