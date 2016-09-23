myApp.controller('mainController', function($routeParams, $scope, $location, mainFactory){

		var modallamp = document.getElementById('myModalLAMP');
		var btnlamp = document.getElementById("myBtnLAMP");
		var spanlamp = document.getElementsByClassName("closeLAMP")[0];
		btnlamp.onclick = function() {
		    modallamp.style.display = "block";
		}
		spanlamp.onclick = function() {
		    modallamp.style.display = "none";
		}
		window.onclick = function(event) {
		    if (event.target == modallamp) {
		        modallamp.style.display = "none";
		    }
		}
		var modalmean = document.getElementById('myModalMEAN');
		var btnmean = document.getElementById("myBtnMEAN");
		var spanmean = document.getElementsByClassName("closeMEAN")[0];
		btnmean.onclick = function() {
				modalmean.style.display = "block";
		}
		spanmean.onclick = function() {
				modalmean.style.display = "none";
		}
		window.onclick = function(event) {
				if (event.target == modalmean) {
						modalmean.style.display = "none";
				}
		}

});
