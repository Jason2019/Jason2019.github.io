var step1Visited = false;
var step2Visited = false;

$(".video-popup").hide();
$("#toFood").hide();
$("#toTea").hide();
$("#toHome").hide();
$("#home circle.st1").css("fill", "red");

$("#home circle.st1").click(function() {
	step1Visited = true;
  	$("#vidWindow1").show();
  	$("#food circle.st1").css("fill", "red");
  	$("#toFood").show();
  	$("body").css("background-image","url(step1.png)");
});

$("#food circle.st1").click(function() {
	if(step1Visited){
		step2Visited = true;
		$("#vidWindow2").show();
  		$("#tea circle.st1").css("fill", "red");
  		$("#toTea").show();
   		$("body").css("background-image","url(step2.jpg)");
	}
});

$("#tea circle.st1").click(function() {
	if (step2Visited){
		$("#vidWindow3").show();
  		$("#toHome").show();
  		$("body").css("background-image","url(step3.png)");
	}
});

$(".close").click(function() {
  $(".video-popup").hide();
});
