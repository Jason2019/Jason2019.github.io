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
	$("#reviews-text").show();
	$("#the-header").html("REVIEWS");
});

$("#contacts-button").click(function(){
	console.log("contacts")
	$(".first-page").hide();
	$(".text-container").hide();
	$("#the-introduction").hide();
	$("#the-video").hide();
	$("#contacts-text").show();
	$("#the-header").html("CONTACTS");
});
