module.exports = {
'roles': {
	'administrator': {
		'name': 'administrator',
		'permissions': []
	},
	'authenticated': {
		'name': 'authenticated',
		'permissions': [
			'create_task',
			'delete_task',
			'update_task'
		],
		'isSystemRole': true
	},
	'unAuthenticated': {
		'name': 'unAuthenticated',
		'permissions': [
			'create_task',
			'delete_task',
			'update_task'
		],
		'isSystemRole': true
	},
	'owner': {
		'name': 'owner',
		'permissions': [],
		'isSystemRole': true
	}
}
};
