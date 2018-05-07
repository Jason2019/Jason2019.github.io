//For the 2.1 video

var theVideoLink2 = "https://www.youtube.com/watch?v=suYZEOLkC_w";
var theElement2 = "#video3";
var myVideo2= Popcorn.smart(theElement2, theVideoLink2);
myVideo2.play();
//us cue to make an event happen at a specific time
myVideo2.cue(47,function(){
	myVideo2.pause();
	document.getElementById("overlaytwo").style.display = "block";
})