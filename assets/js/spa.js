angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', function($scope){

	/* Fake date
	$scope.emojis = [
		{
			id: '1234564',
			text: ':)'
		},
		{
			id: '345674',
			text: ':('
		},
		{
			id: '3456722',
			text: ':-)'
		},
		{
			id: '1234789',
			text: ':S'
		}
	];*/

	io.socket.get('/emojis', function(data){
		$scope.emojis = data;
		$scope.$apply();
	});

	io.socket.on('emojis', function(event){
		switch(event.verb){
			case 'created':
				$scope.emojis.push(event.data);
				$scope.$apply();
			break;
		}
	});

}]);