function begin() {
<<<<<<< HEAD
	$('html, body').animate({scrollTop: $("#panel-1").offset().top}, 800);	
=======
	window.scrollTo(0, 786);
>>>>>>> 060da6cd34df58332febab598005ca0c808b0d4f
}

function back() {
	$('html, body').animate({scrollTop: $("#titlePage").offset().top}, 800);
}

function climb() {
	var elem = document.getElementById("man");   
  	var initPos = 161.9;
  	var pos = initPos;
  	var id = setInterval(frame, 200);
  	function frame() {
    	if (pos >= initPos + 46) {
      		clearInterval(id);
      		document.getElementById("man").style.animation = "";
    	} else {
      		pos++; 
      		elem.style.left = 0.21*pos + 'vw'; 
      		elem.style.top = 636.9- pos + 'vh'; 
      		document.getElementById("man").style.animation = "shake 2s infinite";
    	}
  	}
}
function climb() {
	var elem = document.getElementById("man");   
	  var pos = 28.53;
	  var id = setInterval(frame, 200);
	  function frame() {
	    if (pos == 74.53) {
	      clearInterval(id);
	      document.getElementById("man").style.animation = "";
	    } else {
	      pos++; 
	      elem.style.left = 0.34*pos + 'vw'; 
	      elem.style.top = 528.53-50 - pos + 'vh'; 
	      document.getElementById("man").style.animation = "shake 2s infinite";
	    }
	  }
}
/*after click the icon, the screen goes down and plane audio */
function one() {
<<<<<<< HEAD
	$('html, body').animate({scrollTop: $("#panel-2").offset().top}, 800);
=======
	window.scrollTo(0, 1572);
>>>>>>> 060da6cd34df58332febab598005ca0c808b0d4f
	var audio = document.getElementById("plane");
	audio.play();

	
}

function two() {
<<<<<<< HEAD
	$('html, body').animate({scrollTop: $("#panel-3").offset().top}, 800);
=======
	window.scrollTo(0, 2358);
>>>>>>> 060da6cd34df58332febab598005ca0c808b0d4f
	var audio = document.getElementById("plane");
	audio.pause();

}

function three() {
<<<<<<< HEAD
	$('html, body').animate({scrollTop: $("#panel-4").offset().top}, 800);	 
}

function four() {
	$('html, body').animate({scrollTop: $("#panel-5").offset().top}, 800);
=======
	window.scrollTo(0, 3135);	 
}

function four() {
	window.scrollTo(0, 3910);
>>>>>>> 060da6cd34df58332febab598005ca0c808b0d4f
	var audio = document.getElementById("bubble");
	/*loop the sound of bubbling.*/
	// audio.addEventListener('ended', function() {
 //    	this.currentTime = 0;
 //    	this.play();
	// 	}, false);
	audio.play();

	/*after clicking the button 4, the man climbing the mountain*/
	
}
function five() {
<<<<<<< HEAD
	$('html, body').animate({scrollTop: $("#panel-6").offset().top}, 800);
=======
	window.scrollTo(0, 4700);
>>>>>>> 060da6cd34df58332febab598005ca0c808b0d4f
	var audio = document.getElementById("bubble");
	audio.pause();
}

