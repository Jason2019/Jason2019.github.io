function begin() {
	window.scrollTo(0, 1020);
}
function back() {
	window.scrollTo(0, 0);
}
/*after click the icon, the screen goes down and plane audio */
function one() {
	window.scrollTo(0, 1850);
	var audio = document.getElementById("plane");
	audio.play();

	
}

function two() {
	window.scrollTo(0, 2685);
	var audio = document.getElementById("plane");
	audio.pause();

}
function three() {
	window.scrollTo(0, 3529);
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
	      elem.style.top = 528.53 - pos + 'vh'; 
	      document.getElementById("man").style.animation = "shake 2s infinite";
	    }
	  }
	 
}

function four() {
	window.scrollTo(0, 4355);
	var audio = document.getElementById("bubble");
	/*loop the sound of bubbling.*/
	audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
	}, false);
	audio.play();

	/*after clicking the button 4, the man climbing the mountain*/
	
}
function five() {
	window.scrollTo(0, 5185);
	var audio = document.getElementById("bubble");
	audio.pause();
}

