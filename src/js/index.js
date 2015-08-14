/*global $ */
'use strict';

//Opening animations
function openBars() {
  $('.copyright').removeClass('bot-menu-hide').addClass("bot-menu-show");
  $('header').removeClass('top-menu-hide').addClass("top-menu-show");
}

//Slideshow
var slide = 1;
function changeSlide(slide) {
  $('body').css('background-image', 'url("../assets/slide' + slide + '.jpg")');
}

var carrousel;
function slider() {
  carrousel = setInterval(function() {
    if (slide >= 4) {
      slide = 0;
    }
    slide++;
    changeSlide(slide);
  }, 3000);
}

function fullscreen() {
  //manage fullscreen animations of header, footer, and buttons.
  if ($('.copyright').hasClass('bot-menu-hide')) {
    openBars();
    $('.controls').removeClass('controls-show');
  } else {
    $('.menu').removeClass('toggle-menu-show');
    $('.menu ul').removeClass('items-menu-show');
    $('.controls').addClass('controls-show');
    $('.copyright').addClass('bot-menu-hide');
    $('header').addClass('top-menu-hide');
  }
}

function next() {
  window.clearInterval(carrousel);
  $('button.play').removeClass('playing');

  if (slide < 4) {
    slide++;
    changeSlide(slide);
  } else if (slide === 4) {
    changeSlide(slide = 1);
  }
}

function previous() {
  window.clearInterval(carrousel);
  $('button.play').removeClass('playing');

  if (slide > 1) {
    slide--;
    changeSlide(slide);
  } else if (slide <= 1) {
    slide = 4;
    changeSlide(slide);
  }
}

$('.play').click(function() {
  if ($(this).hasClass('playing')) {
    $(this).removeClass('playing');
    window.clearInterval(carrousel);
  } else {
    $(this).addClass('playing');
    slider();
  }
});

$('.prev').click(previous);

$('.next').click(next);

$('.fullsc').click(fullscreen);

//Toggle button be
$('nav button').click(function() {
  if (!$('.menu').hasClass('toggle-menu-show')) {
    $('.menu').addClass('toggle-menu-show');
    $('.menu ul').addClass('items-menu-show');
  } else {
    $('.menu').removeClass('toggle-menu-show');
    $('.menu ul').removeClass('items-menu-show');
  }
});

//Hover menu
$('nav > ul li').hover(function() {
  $('.submenu').removeClass('display');
});

$('nav > ul:nth-child(2) li:first-child').hover(function() {
  $('.submenu').addClass('display');
});

$('.submenu').mouseleave(function() {
  $('.submenu').removeClass('display');
});

//Opening effects
function startUp() {
  slider();
  openBars();
}

$(document).ready(startUp());

//Small width behavior
$(window).resize(function() {
  if ($(window).width() < 480) {
    $('.fotos').addClass('display');
  } else {
    $('.fotos').removeClass('display');
  }
});

//Small width behavior
$(window).resize(function() {
  if ($(window).width() > 800) {
    $('.menu').addClass('not-display');
    $('.menu').removeClass('toggle-menu-show');
    $('.menu ul').removeClass('items-menu-show');
  } else {
    $('.menu').removeClass('not-display');
  }
});
