angular.module('ourWedding', ['uiGmapgoogle-maps'])
	.controller('WeddingCtrl', function($scope) {
		$scope.map = { 
			center: {
			 latitude: -6.245403, 
			 longitude: 107.059932 
			}, 
			zoom: 16
		};

		$scope.marker = {
			id: 0,
			coords: {
			  latitude: -6.243412699363186, 
			  longitude: 107.06103064119816
			}
		}

		$scope.quotes = [
			{"id":1, "quote":"Akan tetapi sehebat apapun kita merencanakan sesuatu. Tetap rencana Allah adalah sebaik-baiknya rancangan."},
			{"id":2, "quote":"Aku tak berharap kesempurnaanmu. Kerana aku ingin melengkapinya dengan kekuranganku."},
			{"id":3, "quote":"Yang paling sempurna percaya dalam iman adalah orang yang karakter terbaik dan yang paling baik kepada istrinya."},
			{"id":4, "quote":"Selama dalam penantian akan jodoh, perbanyaklah senyum. selama dalam kesendirian perbanyaklah sujud."},
			{"id":5, "quote":"Pantaskan dirimu untuk jodohmu. Karena saat ini ia pun sedang memantaskan dirinya untukmu."},
			{"id":6, "quote":"jodohmu adalah pemberian paling manis dan terbaik yg diberikan Allah padamu."}
		];
	});