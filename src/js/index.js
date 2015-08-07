"use strict";
var slide = 1;


//Manejo del slideshow
function pasar(slide){
	$("body").css("background-image", "url('../assets/slide" + slide + ".jpg')");
}


var paso;
function slider(){
	paso = setInterval(function(){
		if(slide>=4) slide=0;
		slide++;
		pasar(slide);
	},3000);
}

function siguiente(){
	window.clearInterval(paso);
	$("button.play").html("▻");
	if(slide<4){
		slide++;
		pasar(slide);
	}else if(slide ==4){
		pasar(slide=1); 
	}
}

function anterior(){
	window.clearInterval(paso);
	$("button.play").html("▻");
	if(slide>1){
		slide--;
		pasar(slide);
	} else if(slide <= 1){
		slide=4
		pasar(slide);
	}
}


$(".play").click(function(){
	if($(this).html() == "▻"){
		slider();
		$("button.play").html("||");
	}else{
		$("button.play").html("▻");
		window.clearInterval(paso);
	}
});


//Manejo del toggle button
$("nav button").click(function(){
	if ($("#menu").css("display") == "none"){
		$("#menu").css("display","block");
		$( "#menu" ).animate({
			height: "+=200"
		}, 1000, function() {
		// Animation complete.
		});	

		setTimeout(function(){
			$( "#menu ul" ).animate({
				marginTop: "+=150"
			}, 1000, function() {
			// Animation complete.
			});	
		},500);

	}else{
		$("#menu").css("display","none");
		$("#menu").css("height","0");
		$("#menu ul").css("margin-top","-150px");
	}
});


//Manejo del menu hover
$("nav > ul li").hover(function(){
	$("#submenu").css("display","none");
},function(){});


$("nav > ul:nth-child(2) li:nth-child(1)").hover(function(){
	$("#submenu").css("display","block");
},function(){});

$("#submenu").hover(function(){},function(){
	$("#submenu").css("display","none");
});

function startUp(){
	slider();
	$("#Copyright").css("bottom","-200px");
	$("header").css("margin-top","-400px");

	$("#Copyright").animate({
		bottom: "+=200"
	},2000,function(){});

	$("header").animate({
		marginTop: "+=400"
	},2000,function(){});

}

$(document).ready(startUp());