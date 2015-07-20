
//Hide all the panels
$(".panel").hide();

//Show the panel with the ID of home
$("#home").show();

$("#aboutsection a").on("click",function (e){
	e.preventDefault();
	
	//console.log($(this).data('panel'));

	//Hide all elements with the class of panel
	$(".panel").hide();

	//Show the panel with an ID equal this a tag's data-panel
	$("#"+$(this).data('panel')).show();

});

$("#arrow").on("click", function(){
	$('html,body').animate({scrollTop: $("#container").offset().top-98}, 1200)
});

// when user clicks on about li 
// the page scrolls down to top of container id 

$("#aboutlink").on("click", function(){
	$('html,body').animate({scrollTop: $("#container").offset().top-98}, 1200)
});

$("#portfoliolink").on("click", function(){
	$('html,body').animate({scrollTop: $(".carousel-outer").offset().top-98}, 1200)
});

$("#contactlink").on("click", function(){
	$('html,body').animate({scrollTop: $(".contactme").offset().top-98}, 1200)
});

$("#logoheader").on("click", function(){
	$('html,body').animate({scrollTop: $(".header").offset().top-9000}, 1200)
});


var imagepaths = ["img/red.jpg", "img/blue.jpg", "img/red.jpg", "img/blue.jpg"];
var currentPosition = 0;

$(".nextLink").on("click", function(e){
	if (currentPosition === imagepaths.length -1)
	{ 
		currentPosition =0;
	}
	else {
		currentPosition +=1
	}

	$(".image-shown").attr("src", imagepaths[currentPosition]);


	e.preventDefault();
});

$(".previousLink").on("click", function(e){

	//if user is on the first image 
	if (currentPosition ===0){
		// take user to last image 3 
		currentPosition =imagepaths.length -1;
	}
	else{
		currentPosition -=1
	}

	$(".image-shown").attr("src", imagepaths[currentPosition]);

	// else 
		// take index / current image and -1  


	e.preventDefault();
})



