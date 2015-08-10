/*global $ */
'use strict';

//ANIMATIONS TO CSS
//SPIRTES
//CSS BY CLASSES

//Opening animations
function openBars(time) {
	$('.copyright').animate({
		bottom: '+=200'
	}, time, function(){});

	$('header').animate({
		marginTop: '+=400'
	}, time, function(){});
}

//Slideshow
var slide = 1;

$('.backcontrols').hover(function() {
	if ($('.copyright').css('bottom') ==='-200px') {
		openBars(1000);
	}
});

function changeSlide(slide) {
	$('body').css('background-image', 'url("../assets/slide' + slide + '.jpg")');
}

var carrousel;
function slider() {
	carrousel = setInterval(function(){
		if (slide >= 4) {
			slide=0;
		}
		slide++;
		changeSlide(slide);
	},3000);
}

function fullscreen() {
	$('.copyright').animate({
		bottom: '-=200'
	}, 1000, function(){});

	$('header').animate({
		marginTop: '-=400'
	}, 1000, function(){});
}

function next() {
	window.clearInterval(carrousel);
	$('button.play').html('▻');
	
	if (slide < 4) {
		slide++;
		changeSlide(slide);
	} else if (slide === 4) {
		changeSlide(slide=1); 
	}
}

function previous() {
	window.clearInterval(carrousel);
	$('button.play').html('▻');
	
	if (slide > 1) {
		slide--;
		changeSlide(slide);
	} else if (slide <= 1) {
		slide=4;
		changeSlide(slide);
	}
}

$('.play').click(function() {
	if ($(this).html() === '▻') {
		slider();
		$('button.play').html('||');
	} else {
		$('button.play').html('▻');
		window.clearInterval(carrousel);
	}
});

$('.prev').click(function() {
	previous();
});

$('.next').click(function() {
	next();
});

$('.fullsc').click(function() {
	fullscreen();
});

//Toggle button
$('nav button').click(function() {
	if (!$('.menu').hasClass('display')) {
		$('.menu').addClass('display');

		$('.menu').animate({
			height: '+=200'
		}, 1000, function() {
		// Animation complete.
		});	

		setTimeout(function() {
			$( '.menu ul' ).animate({
				marginTop: '+=150'
			}, 1000, function() {
			// Animation complete.
			});	
		},500);

	} else {
		$('.menu').removeClass('display');
		$('.menu').css('height','0');
		$('.menu ul').css('margin-top','-150px');
	}
});

//Hover menu
$('nav > ul li').hover(function() {
	$('.submenu').css('display','none');
},function(){});

$('nav > ul:nth-child(2) li:nth-child(1)').hover(function(){
	$('.submenu').css('display','block');
},function(){});

$('.submenu').hover(function(){},function(){
	$('.submenu').css('display','none');
});

//Opening effects
function startUp() {
	slider();
	$('.copyright').css('bottom','-200px');
	$('header').css('margin-top','-400px');
	openBars(2000);
}

$(document).ready(startUp());

//Small width behavior
function loadPictures() {
	var toAppend = '';
	
	for (var i=1;i<5;i++) {
		toAppend += '<img src="assets/slide'+i+'.jpg"></img>';
	}
	$('.fotos').append(toAppend);
}

function removePictures() {
	$('.fotos img').remove();
}

$(window).resize(function() {
	if ($(window).width() < 480) {
	   loadPictures();
	} else {
	   removePictures();
	}
});
