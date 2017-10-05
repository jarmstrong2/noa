(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	console.log(window.location.href)
	$("#sticker").sticky({
		topSpacing: 0,
		zIndex: 500
	});
	$('#homeLink').on('click', function () {
		window.location.href = "/";
	});
	const url = window.location.href;
	if(url.indexOf('goods') > 0 || url.indexOf('games') > 0 || url.indexOf('party') > 0) {
		$('#dropdownHover').addClass('currentLink');
	} else if (url.indexOf('goods') < 0 ) {
		$('#dropdownHover').removeClass('currentLink');
	}
	if(url.indexOf('index') > 0) {
		$('#home').addClass('currentLink');
	} else if (url.indexOf('index') < 0) {
		$('#home').removeClass('currentLink');
	}
	if(url.indexOf('contact') > 0) {
		$('#contact').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#contact').removeClass('currentLink');
	}
	if(url.indexOf('about') > 0) {
		$('#about').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#about').removeClass('currentLink');
	}
	if(url.indexOf('collaboration') > 0) {
		$('#collaboration').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#collaboration').removeClass('currentLink');
	}
	if(url.indexOf('how-it-works') > 0) {
		$('#howWorks').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#howWorks').removeClass('currentLink');
	}
});
$(window).load(function () {

	$('#hamburger').on('click', function () {
		$('.hamburgerMenu').slideToggle();
	});
	$('.party-tile').on('click', function (e) {
		var $clicked = $(e.target);
		var index = $clicked.attr('data-index');
		var $carousel = $('.main-gallery');
		$carousel.show();
		$('.main-gallery').flickity({
			wrapAround: true,
			initialIndex: index,
			cellSelector: '.gallery-cell'
		});
	});

	$('.goods-tile').click(function (e) {
		var $clicked = $(e.target);
		var index = $clicked.attr('data-index');
		var $carousel = $('.main-gallery');
		$carousel.show();
		$('.main-gallery').flickity({
			wrapAround: true,
			initialIndex: index,
			cellSelector: '.gallery-cell'
		});
	});

	$('.game-tile').click(function (e) {
		var $clicked = $(e.target);
		var index = $clicked.attr('data-index');
		var $carousel = $('.main-gallery');
		$carousel.show();
		$('.main-gallery').flickity({
			wrapAround: true,
			initialIndex: index,
			cellSelector: '.gallery-cell'
		});
	});

	$('.party-close').click(function () {
		var $carousel = $('.main-gallery');
		$carousel.flickity('destroy');
		$('.main-gallery').hide();
	});

	$('.goods-close').click(function () {
		var $carousel = $('.main-gallery');
		$carousel.flickity('destroy');
		$('.main-gallery').hide();
	});

	$('.games-close').click(function () {
		var $carousel = $('.main-gallery');
		$carousel.flickity('destroy');
		$('.main-gallery').hide();
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVU7QUFDMUIsR0FBRSxVQUFGLEVBQWMsTUFBZCxDQUFxQjtBQUNwQixjQUFXLENBRFM7QUFFcEIsVUFBUTtBQUZZLEVBQXJCO0FBSUEsR0FBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFNO0FBQ2hDLFNBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixHQUF2QjtBQUNBLEVBRkQ7QUFHRCxDQVJEO0FBU0EsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLFlBQVc7O0FBRXpCLEdBQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFXO0FBQ3RDLElBQUUsZ0JBQUYsRUFBb0IsV0FBcEI7QUFDQSxFQUZEO0FBR0csR0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVMsQ0FBVCxFQUFZO0FBQzFDLE1BQU0sV0FBVyxFQUFFLEVBQUUsTUFBSixDQUFqQjtBQUNBLE1BQU0sUUFBUSxTQUFTLElBQVQsQ0FBYyxZQUFkLENBQWQ7QUFDQSxNQUFNLFlBQVksRUFBRSxlQUFGLENBQWxCO0FBQ0EsWUFBVSxJQUFWO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLFFBQW5CLENBQTRCO0FBQzNCLGVBQVksSUFEZTtBQUUzQixpQkFBYyxLQUZhO0FBRzNCLGlCQUFjO0FBSGEsR0FBNUI7QUFLQSxFQVZDOztBQVlGLEdBQUUsYUFBRixFQUFpQixLQUFqQixDQUF1QixVQUFTLENBQVQsRUFBWTtBQUNsQyxNQUFNLFdBQVcsRUFBRSxFQUFFLE1BQUosQ0FBakI7QUFDQSxNQUFNLFFBQVEsU0FBUyxJQUFULENBQWMsWUFBZCxDQUFkO0FBQ0EsTUFBTSxZQUFZLEVBQUUsZUFBRixDQUFsQjtBQUNBLFlBQVUsSUFBVjtBQUNBLElBQUUsZUFBRixFQUFtQixRQUFuQixDQUE0QjtBQUMzQixlQUFZLElBRGU7QUFFM0IsaUJBQWMsS0FGYTtBQUczQixpQkFBYztBQUhhLEdBQTVCO0FBS0EsRUFWRDs7QUFZQSxHQUFFLFlBQUYsRUFBZ0IsS0FBaEIsQ0FBc0IsVUFBUyxDQUFULEVBQVk7QUFDakMsTUFBTSxXQUFXLEVBQUUsRUFBRSxNQUFKLENBQWpCO0FBQ0EsTUFBTSxRQUFRLFNBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBZDtBQUNBLE1BQU0sWUFBWSxFQUFFLGVBQUYsQ0FBbEI7QUFDQSxZQUFVLElBQVY7QUFDQSxJQUFFLGVBQUYsRUFBbUIsUUFBbkIsQ0FBNEI7QUFDM0IsZUFBWSxJQURlO0FBRTNCLGlCQUFjLEtBRmE7QUFHM0IsaUJBQWM7QUFIYSxHQUE1QjtBQUtBLEVBVkQ7O0FBWUMsR0FBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFlBQVc7QUFDbkMsTUFBTSxZQUFZLEVBQUUsZUFBRixDQUFsQjtBQUNBLFlBQVUsUUFBVixDQUFtQixTQUFuQjtBQUNELElBQUUsZUFBRixFQUFtQixJQUFuQjtBQUNHLEVBSkY7O0FBTUMsR0FBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFlBQVc7QUFDcEMsTUFBTSxZQUFZLEVBQUUsZUFBRixDQUFsQjtBQUNBLFlBQVUsUUFBVixDQUFtQixTQUFuQjtBQUNBLElBQUUsZUFBRixFQUFtQixJQUFuQjtBQUNFLEVBSkQ7O0FBTUEsR0FBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFlBQVc7QUFDcEMsTUFBTSxZQUFZLEVBQUUsZUFBRixDQUFsQjtBQUNBLFlBQVUsUUFBVixDQUFtQixTQUFuQjtBQUNBLElBQUUsZUFBRixFQUFtQixJQUFuQjtBQUNBLEVBSkM7QUFLSCxDQTFERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRcdCQoXCIjc3RpY2tlclwiKS5zdGlja3koe1xuXHRcdFx0dG9wU3BhY2luZzowLFxuXHRcdFx0ekluZGV4OiA1MDAsXG5cdFx0fSk7XG5cdFx0JCgnI2hvbWVMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcblx0XHR9KVxufSk7XG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblxuXHQkKCcjaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JCgnLmhhbWJ1cmdlck1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xuXHR9KVxuICAgICQoJy5wYXJ0eS10aWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0Y29uc3QgJGNsaWNrZWQgPSAkKGUudGFyZ2V0KTtcblx0XHRcdGNvbnN0IGluZGV4ID0gJGNsaWNrZWQuYXR0cignZGF0YS1pbmRleCcpO1xuXHRcdFx0Y29uc3QgJGNhcm91c2VsID0gJCgnLm1haW4tZ2FsbGVyeScpO1xuXHRcdFx0JGNhcm91c2VsLnNob3coKTtcblx0XHRcdCQoJy5tYWluLWdhbGxlcnknKS5mbGlja2l0eSh7XG5cdFx0XHRcdHdyYXBBcm91bmQ6IHRydWUsXG5cdFx0XHRcdGluaXRpYWxJbmRleDogaW5kZXgsXG5cdFx0XHRcdGNlbGxTZWxlY3RvcjogJy5nYWxsZXJ5LWNlbGwnXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XG5cdFx0JCgnLmdvb2RzLXRpbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCAkY2xpY2tlZCA9ICQoZS50YXJnZXQpO1xuXHRcdFx0Y29uc3QgaW5kZXggPSAkY2xpY2tlZC5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cdFx0XHRjb25zdCAkY2Fyb3VzZWwgPSAkKCcubWFpbi1nYWxsZXJ5Jyk7XG5cdFx0XHQkY2Fyb3VzZWwuc2hvdygpO1xuXHRcdFx0JCgnLm1haW4tZ2FsbGVyeScpLmZsaWNraXR5KHtcblx0XHRcdFx0d3JhcEFyb3VuZDogdHJ1ZSxcblx0XHRcdFx0aW5pdGlhbEluZGV4OiBpbmRleCxcblx0XHRcdFx0Y2VsbFNlbGVjdG9yOiAnLmdhbGxlcnktY2VsbCdcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdFxuXHRcdCQoJy5nYW1lLXRpbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCAkY2xpY2tlZCA9ICQoZS50YXJnZXQpO1xuXHRcdFx0Y29uc3QgaW5kZXggPSAkY2xpY2tlZC5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cdFx0XHRjb25zdCAkY2Fyb3VzZWwgPSAkKCcubWFpbi1nYWxsZXJ5Jyk7XG5cdFx0XHQkY2Fyb3VzZWwuc2hvdygpO1xuXHRcdFx0JCgnLm1haW4tZ2FsbGVyeScpLmZsaWNraXR5KHtcblx0XHRcdFx0d3JhcEFyb3VuZDogdHJ1ZSxcblx0XHRcdFx0aW5pdGlhbEluZGV4OiBpbmRleCxcblx0XHRcdFx0Y2VsbFNlbGVjdG9yOiAnLmdhbGxlcnktY2VsbCdcblx0XHRcdH0pO1xuXHRcdH0pXG4gICAgXG4gIFx0JCgnLnBhcnR5LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkY2Fyb3VzZWwgPSAkKCcubWFpbi1nYWxsZXJ5Jyk7XG5cdFx0XHQkY2Fyb3VzZWwuZmxpY2tpdHkoJ2Rlc3Ryb3knKTtcblx0XHQkKCcubWFpbi1nYWxsZXJ5JykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmdvb2RzLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkY2Fyb3VzZWwgPSAkKCcubWFpbi1nYWxsZXJ5Jyk7XG5cdFx0XHQkY2Fyb3VzZWwuZmxpY2tpdHkoJ2Rlc3Ryb3knKTtcblx0XHRcdCQoJy5tYWluLWdhbGxlcnknKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZ2FtZXMtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICRjYXJvdXNlbCA9ICQoJy5tYWluLWdhbGxlcnknKTtcblx0XHRcdCRjYXJvdXNlbC5mbGlja2l0eSgnZGVzdHJveScpO1xuXHRcdFx0JCgnLm1haW4tZ2FsbGVyeScpLmhpZGUoKTtcblx0XHR9KTtcbn0pO1xuXG4iXX0=
