myApp.controller('mainController', function($scope, mainFactory){

	var x;
	mainFactory.getQuestions(function(callback){
		$scope.questions = callback;
		x = callback;
	});

	window.onscroll = function() {
		scroll_detect("cms_bar", "fill_bar_cms");
		scroll_detect("oop_bar", "fill_bar_oop");
		scroll_detect("ux_bar", "fill_bar_ux");
		scroll_detect("mean_bar", "fill_bar_mean");
		scroll_detect("lamp_bar", "fill_bar_lamp");
	};

	scroll_detect = function(el, cl){
		var el = document.getElementById(el);
		if (document.body.scrollTop > (el.scrollTop + 200) || document.documentElement.scrollTop > (el.scrollTop + 200)) {
				el.children[0].className = cl;
		}
	}

	var modallist = document.getElementById('myModalLIST');
	var btnlist = document.getElementById("myBtnLIST");
	var spanlist = document.getElementsByClassName("closeLIST")[0];
	btnlist.onclick = function() {
		modallist.style.display = "block";
	}
	spanlist.onclick = function() {
		modallist.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modallist) {
				modallist.style.display = "none";
		}
	}

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

	var modalux = document.getElementById('myModalUX');
	var btnux = document.getElementById("myBtnUX");
	var spanux = document.getElementsByClassName("closeUX")[0];
	btnux.onclick = function() {
		modalux.style.display = "block";
	}
	spanux.onclick = function() {
		modalux.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modalux) {
				modalux.style.display = "none";
		}
	}

	var modaloop = document.getElementById('myModalOOP');
	var btnoop = document.getElementById("myBtnOOP");
	var spanoop = document.getElementsByClassName("closeOOP")[0];
	btnoop.onclick = function() {
		modaloop.style.display = "block";
	}
	spanoop.onclick = function() {
		modaloop.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modaloop) {
				modaloop.style.display = "none";
		}
	}

	var modalcms = document.getElementById('myModalCMS');
	var btncms = document.getElementById("myBtnCMS");
	var spancms = document.getElementsByClassName("closeCMS")[0];
	btncms.onclick = function() {
		modalcms.style.display = "block";
	}
	spancms.onclick = function() {
		modalcms.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modalcms) {
				modalcms.style.display = "none";
		}
	}

	$scope.ask = function(question){
		var i;
		for(i = 0; i < x.length; i++){
			if(x[i].question == question){
				break;
			}
		}
		document.getElementById('answer').innerHTML = x[i].answer;
		document.getElementById('question').innerHTML = question;
	}

	function scrollTo(element, to, duration) {
		if (duration <= 0) return;
		var difference = to - element.scrollTop;
		var perTick = difference / duration * 20;
		setTimeout(function() {
				element.scrollTop = element.scrollTop + perTick;
				if (element.scrollTop === to) return;
				scrollTo(element, to, duration - 10);
		}, 10);
	}

	$scope.back_top = function(){
		scrollTo(document.body, 0, 5000 );
	}

	$scope.scrollTo = function(id){
		if(id == 'landing'){
			scrollTo(document.body, 0, 500 );
		}
		else{
			timer = document.getElementById(id).offsetTop/2;
			scrollTo(document.body, document.getElementById(id).offsetTop, timer );
		}
	}

	$scope.send_message = function(){
		mainFactory.send_message($scope.name, $scope.email, $scope.message, function(callback){
			if(callback.errors){
				$scope.name_error = callback.errors.name.message;
				$scope.email_error = callback.errors.email.message;
				$scope.message_error = callback.errors.message.message;
			}else{
				$scope.name = '';
				$scope.email = '';
				$scope.message = '';
				$scope.success_message = 'Thanks for contacting me!';
			}
		});
	}


	var videos_sm = document.getElementsByClassName("youtube-player_sm");

	for (var i=0; i<videos_sm.length; i++) {

	  var youtube = videos_sm[i];

	  // Based on the YouTube ID, we can easily find the thumbnail image
	  var img = document.createElement("img");
	  img.setAttribute("src", "http://i.ytimg.com/vi/"
	                          + youtube.id + "/hqdefault.jpg");
	  img.setAttribute("class", "thumb");


	  // Overlay the Play icon to make it look like a video player
	  var circle = document.createElement("div");
	  circle.setAttribute("class","circle");

	  youtube.appendChild(img);
	  youtube.appendChild(circle);

	  // Attach an onclick event to the YouTube Thumbnail
	  youtube.onclick = function() {

	    // Create an iFrame with autoplay set to true
	    var iframe = document.createElement("iframe");
	    iframe.setAttribute("src",
	          "https://www.youtube.com/embed/" + this.id
	        + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");

	    // The height and width of the iFrame should be the same as parent
			iframe.style.width  = '100%';
    	iframe.style.height = '100%';

	    // Replace the YouTube thumbnail with YouTube HTML5 Player
	    this.parentNode.replaceChild(iframe, this);

	  };
	}


var videos = document.getElementsByClassName("youtube-player");

for (var i=0; i<videos.length; i++) {

  var youtube = videos[i];

  // Based on the YouTube ID, we can easily find the thumbnail image
  var img = document.createElement("img");
  img.setAttribute("src", "http://i.ytimg.com/vi/"
                          + youtube.id + "/hqdefault.jpg");
  img.setAttribute("class", "thumb");


  // Overlay the Play icon to make it look like a video player
  var circle = document.createElement("div");
  circle.setAttribute("class","circle");

  youtube.appendChild(img);
  youtube.appendChild(circle);

  // Attach an onclick event to the YouTube Thumbnail
  youtube.onclick = function() {

    // Create an iFrame with autoplay set to true
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src",
          "https://www.youtube.com/embed/" + this.id
        + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");

    // The height and width of the iFrame should be the same as parent
    iframe.style.width  = '40em';
    iframe.style.height = '27em';

    // Replace the YouTube thumbnail with YouTube HTML5 Player
    this.parentNode.replaceChild(iframe, this);

  };
}

});
