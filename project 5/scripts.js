function one() {
	$('html, body').animate({scrollTop: $("#page1").offset().top}, 800);	 
}
function two() {
	$('html, body').animate({scrollTop: $("#page2").offset().top}, 800);	 
}
function three() {
	$('html, body').animate({scrollTop: $("#page3").offset().top}, 800);	 
}
function four() {
	$('html, body').animate({scrollTop: $("#page4").offset().top}, 800);	 
}

// using popcorn.js to make the interaction in the video.


var theVideoLink1 = "https://www.youtube.com/watch?v=3Sj78Lxrb8A";
var theElement1 = "#video1";
var myVideo1 = Popcorn.smart(theElement1, theVideoLink1);
myVideo1.play();
//us cue to make an event happen at a specific time
myVideo1.cue(43,function(){
	myVideo1.pause();
	document.getElementById("overlayone").style.display = "block";
})

//For the 2.1 video
/*
var theVideoLink2 = "https://www.youtube.com/watch?v=IcrbM1l_BoI&start_radio=1&list=RDIcrbM1l_BoI";
var theElement2 = "#video21";
var myVideo2= Popcorn.smart(theElement2, theVideoLink2);
myVideo2.play();
//us cue to make an event happen at a specific time
myVideo2.cue(2,function(){
	myVideo2.pause();
	document.getElementById("overlaytwo").style.display = "block";
})
// for video 2.2
var theVideoLink22 = "https://www.youtube.com/watch?v=hT_nvWreIhg&start_radio=1&list=RDhT_nvWreIhg";

var theElement22 = "#video22";

var myVideo22 = Popcorn.smart(theElement22, theVideoLink22);

myVideo22.play();

//us cue to make an event happen at a specific time
myVideo22.cue(2,function(){
	myVideo22.pause();
	document.getElementById("overlayone").style.display = "block";
})
//hideoverlay(){
//	var elems = document.getElementClassName("overlays");
//	for(var 1=0; i < elems.length; i+=1){
//		elems[i].style.display = "none";
//		myVideo.play();
//	}
//}

/*function skipseconds(number){
	console.log(number);
	myVideo.currentTime(number);
	myVideo.play();
	if(number == 20)
		myVideo.cue(40,function(){
			myVideo.currentTime(30);
			myVideo.play();
		})
}
*/