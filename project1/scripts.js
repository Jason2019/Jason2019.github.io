$("#intro-button").click(function(){
	console.log("introduction video")
	$(".first-page").hide();
	$(".text-container").hide();
	$("#the-video").hide();
	$("#the-introduction").show();
	$("#the-header").html("INTRODUCTION");

});

$("#video-button").click(function(){
	console.log("video")
	$(".firs-tpage").hide();
	$(".text-container").hide();
	$("#the-introduction").hide();
	$("#the-video").show();
	$("#the-header").html("FILM");
});

$("#reviews-button").click(function(){
	console.log("reviews")
	$(".first-page").hide();
	$(".text-container").hide();
	$("#the-introduction").hide();
	$("#the-video").hide();

	$("#the-header").html("REVIEWS");
	
	$(document).ready(function(){
        $("#review1").delay(500).fadeIn(1000);
        $("#review2").delay(1500).fadeIn(1000);
        $("#review3").delay(2500).fadeIn(1000);
        $("#review4").delay(3000).fadeIn(1000);


    });
});

$("#contacts-button").click(function(){
	console.log("contacts")
	$(".first-page").hide();
	$(".text-container").hide();
	$("#the-introduction").hide();
	$("#the-video").hide();

	$("#the-header").html("CONTACTS");

	$(document).ready(function(){
        $("#contact1").delay(0).fadeIn(1000);
        $("#contact2").delay(800).fadeIn(1000);
        $("#contact3").delay(1600).fadeIn(1000);
        $("#contact4").delay(2400).fadeIn(1000);



    });
});


