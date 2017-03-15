'use strict';

angular.module('crudApp').controller('UserController',
		['UserService', '$scope', function(UserService, $scope) {
			$scope.orderByField = 'name';
			$scope.reverseSort = false;
			var self = this;
			self.user = {};
			self.users = [];
			
			self.submit = submit;
			self.getAllUsers = getAllUsers;
			self.createUser = createUser;
			self.updateUser = updateUser;
			self.removeUser = removeUser;
			self.editUser = editUser;
			self.reset = reset;
			
			self.successMessage = '';
			self.errorMessage = '';
			self.done = false;
			
			self.onlyIntegers = /^\d+$/;
			self.onlyNumbers = /^\d+([,.]\d+)?$/;
			
			function submit () {
				console.log('Submitting');
				if (self.user.id === undefined || self.user.id === null) {
					console.log('Saving New User', self.user);
					createUser(self.user);
				} else {
					updateUser(self.user, self.user.id);
					cosole.log('User updated with id ', self.user.id);
				}
			}
			
			function createUser (user) {
				console.log('About to create user');
				UserService.createUser(user)
					.then (
							function (response) {
								console.log('User created successfully');
								self.successMessage = 'User created successfully';
								self.errorMessage = '';
								self.done = true;
								self.user = {};
								$scope.myForm.$setPristine();
							},
							function (errResponse) {
								console.error('Error while creating User');
								self.errorMessage = 'Error while creating User: ' + errResponse.data.errorMessage;
								self.successMessage = '';
							}
					);
			}
			
			function updateUser(user, id) {
				console.log('About to update user');
				UserService.updateUser(user, id)
					.then (
							function (response) {
								console.log('User updated successfully');
								self.successMessage='User updated successfully';
								self.errorMessage = '';
								self.done = true;
								$scope.myForm.$setPristine();
							},
							function (errResponse) {
								console.error('Error hwile updating User');
								self.errorMessage = 'Error while updating User ' +errResponse.data;
								self.successMessage = '';
							}
					);
			}
			
			function removeUser(id) {
				console.log('About to remove User with id' +id);
				UserService.removeUser(id)
					.then (
							function() {
								console.log('User ' +id + ' removed successfully');
							},
							function(errResponse) {
								console.error('Error while removing user ' +id + ', Error:' +errResponse.data);
							}
					);
			}
			
			function getAllUsers() {
				return UserService.getAllUsers();
			}
			
			function editUser(id) {
				self.successMessage = '';
				self.errorMessage = '';
				UserService.getUser(id).then (
						function (user) {
							self.user = user;
						},
						function (errResponse) {
							console.error('Error while removing user ' + id + ', Error: ' + errResponse.data);
						}
				);
			}
			
			function reset() {
				self.successMessage = '';
				self.errorMessage = '';
				self.user = {};
				$scope.myForm.$setPristine(); //reset Form
			}
		
			$scope.options = {
					chart: {
						type: 'historicalBarChart',
						height: 450,
						margin: {
							top: 20,
							right: 20,
							bottom: 65,
							left: 50
						},
						x: function(d){return d[0];},
						y: function(d){return d[1]/100000;},
						showValues: true,
						valueFormat: function(d){
							return d3.format(',.1f')(d);
						},
						duration: 100,
						xAxis: {
							axisLabel: 'X Axis',
							tickFormat: function(d) {
								return d3.time.format('%x')(new Date(d));
							},
							rotateLabels: 30,
							showMaxMin: false
						},
						yAxis: {
							axisLabel: 'Y Axis',
							axisLabelDistance: -10,
							tickFormat: function(d){
								return d3.format(',.1f')(d);
							}
						},
						tooltip: {
							keyFormatter: function(d) {
								return d3.time.format('%x')(new Date(d));
							}
						},
						zoom: {
							enabled: true,
							scaleExtent: [1, 10],
							useFixedDomain: false,
							useNiceScale: false,
							horizontalOff: false,
							verticalOff: true,
							unzoomEventType: 'dblclick.zoom'
						}
					}
			};
			
			$scope.data = [
				{
					"key" : "Quantity",
					"bar" : true,
					"values" : [ [ 1136005200000, 1151000.0], [1138683600000, 1271000.0]]
				}];
		
		}]);