'use strict';
angular.module('crudApp').controller('ChartController', function($scope) {
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
			"values" : [ [ 1136005200000, 1271000.0], [1138683600000, 1271000.0]]
		}];
});
			
			