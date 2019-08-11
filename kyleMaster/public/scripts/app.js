'use strict';

//Empty Namespace
var portfolio = {};

//Portfolio Initialize
portfolio.init = function () {
	portfolio.hamMenu();
	portfolio.scroller();
};

//Hamburger Menu Function
portfolio.hamMenu = function () {
	var navBar = $('.nav-bar');
	var darkOverlay = $('.dark-overlay');
	//This is to toggle the Menu Open.
	$('.nav-hamburger').on('click', function () {
		navBar.addClass('nav-bar_open');
		darkOverlay.addClass('dark-overlay_on animated fadeIn');
	});
	//This is to toggle the Menu Closed.
	$('.nav-bar_close').on('click', function () {
		navBar.removeClass('nav-bar_open');
		darkOverlay.removeClass('dark-overlay_on');
	});
	//This is to toggle the Menu Closed when link is Clicked
	$('.nav-bar li').on('click', function () {
		navBar.removeClass('nav-bar_open');
		darkOverlay.removeClass('dark-overlay_on');
	});
};

portfolio.scroller = function () {
	//This is will be for the first Chevron down.
	$('.smooth-scroll-down').on('click', function () {
		console.log("hello");
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 1000);
	});
	//This will be for the bottom Chevron to scroll up
	$('.back-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#home').offset().top
		}, 1500);
	});
};

//Document Ready
$(function () {
	portfolio.init();
});