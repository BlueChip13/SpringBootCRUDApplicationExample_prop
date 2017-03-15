<!DOCTYPE html>

<html lang="en" >
	<head>
		<title>${title}</title>
		<link href="css/bootstrap.css" rel="stylesheet"/>
		<link href="css/app.css" rel="stylesheet"/>
		
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.css"/>
		
		<script src="js/lib/angular.min.js"></script>
		<script src="js/lib/angular-ui-router.min.js"></script>
		<script src="js/lib/localforage.min.js"></script>
		<script src="js/lib/ngStorage.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.js"></script>
		<script src="https://rawgit.com/krispo/angular-nvd3/v1.0.5/dist/angular-nvd3.js"></script>
		<script src="js/app/app.js"></script>
		<script src="js/app/UserService.js"></script>
		<script src="js/app/UserController.js"></script>
		<script src="js/app/ChartController.js"></script>
	</head>
	<body ng-app="crudApp">
		<p>THIS IS FROM INDEX.FTL</p>
		<div ui-view></div>

	</body>
</html>