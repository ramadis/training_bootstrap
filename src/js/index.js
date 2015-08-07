var slide = 1;

function pasar(slide){
	$("#Slideshow").css("background-image", "url('../assets/slide" + slide + ".jpg')");
}

$("#submen")

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
	$("button.play").html("Play");
	if(slide<4){
		slide++;
		pasar(slide);
	}else if(slide ==4){
		pasar(slide=1); 
	}
}

function anterior(){
	window.clearInterval(paso);
	$("button.play").html("Play");
	if(slide>1){
		slide--;
		pasar(slide);
	} else if(slide <= 1){
		slide=4
		pasar(slide);
	}
}

$(document).ready(slider());

$(".play").click(function(){
	if($(this).html() == "Play"){
		slider();
		$("button.play").html("Pausa");
	}else{
		$("button.play").html("Play");
		window.clearInterval(paso);
	}
});

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

$("nav ul li:nth-child(1)").hover(function(){
	$("#submenu").css("display","block");
},function(){
	$("#submenu").css("display","none");
});