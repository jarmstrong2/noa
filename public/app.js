(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	$('#homeLink').on('click', function () {
		window.location.href = "/";
	});
	var url = window.location.href;
	if (url.indexOf('goods') > 0 || url.indexOf('games') > 0 || url.indexOf('party') > 0) {
		$('#dropdownHover').addClass('currentLink');
	} else if (url.indexOf('goods') < 0) {
		$('#dropdownHover').removeClass('currentLink');
	}
	if (url.indexOf('index') > 0) {
		$('#home').addClass('currentLink');
	} else if (url.indexOf('index') < 0) {
		$('#home').removeClass('currentLink');
	}
	if (url.indexOf('contact') > 0) {
		$('#contact').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#contact').removeClass('currentLink');
	}
	if (url.indexOf('about') > 0) {
		$('#about').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#about').removeClass('currentLink');
	}
	if (url.indexOf('collaboration') > 0) {
		$('#collaboration').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#collaboration').removeClass('currentLink');
	}
	if (url.indexOf('how-it-works') > 0) {
		$('#howWorks').addClass('currentLink');
	} else if (url.indexOf('contact') < 0) {
		$('#howWorks').removeClass('currentLink');
	}
});
$(window).load(function () {
	console.log('loaded');
	$('#hamburger').on('click', function () {
		$('.hamburgerMenu').slideToggle();
	});
	$('.party-tile').on('click', function (e) {
		var $clicked = $(e.target);
		var index = $clicked.attr('data-index');
		$('.holdGallery').show();
		var $carousel = $('.main-gallery');
		$carousel.show();
		$('.main-gallery').flickity({
			wrapAround: true,
			initialIndex: index,
			cellSelector: '.gallery-cell',
			pageDots: false
		});
	});

	$('.goods-tile').click(function (e) {
		var $clicked = $(e.target);
		var index = $clicked.attr('data-index');
		$('.holdGallery').show();
		var $carousel = $('.main-gallery');
		$carousel.show();
		$('.main-gallery').flickity({
			wrapAround: true,
			initialIndex: index,
			cellSelector: '.gallery-cell',
			pageDots: false
		});
	});

	$('.game-tile').click(function (e) {
		var $clicked = $(e.target);
		var index = $clicked.attr('data-index');
		$('.holdGallery').show();
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
		$('.holdGallery').hide();
	});

	$('.goods-close').click(function () {
		var $carousel = $('.main-gallery');
		$carousel.flickity('destroy');
		$('.main-gallery').hide();
		$('.holdGallery').hide();
	});

	$('.games-close').click(function () {
		var $carousel = $('.main-gallery');
		$carousel.flickity('destroy');
		$('.main-gallery').hide();
		$('.holdGallery').hide();
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVU7QUFDNUIsR0FBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFZO0FBQ3RDLFNBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixHQUF2QjtBQUNBLEVBRkQ7QUFHQSxLQUFNLE1BQU0sT0FBTyxRQUFQLENBQWdCLElBQTVCO0FBQ0EsS0FBRyxJQUFJLE9BQUosQ0FBWSxPQUFaLElBQXVCLENBQXZCLElBQTRCLElBQUksT0FBSixDQUFZLE9BQVosSUFBdUIsQ0FBbkQsSUFBd0QsSUFBSSxPQUFKLENBQVksT0FBWixJQUF1QixDQUFsRixFQUFxRjtBQUNwRixJQUFFLGdCQUFGLEVBQW9CLFFBQXBCLENBQTZCLGFBQTdCO0FBQ0EsRUFGRCxNQUVPLElBQUksSUFBSSxPQUFKLENBQVksT0FBWixJQUF1QixDQUEzQixFQUErQjtBQUNyQyxJQUFFLGdCQUFGLEVBQW9CLFdBQXBCLENBQWdDLGFBQWhDO0FBQ0E7QUFDRCxLQUFHLElBQUksT0FBSixDQUFZLE9BQVosSUFBdUIsQ0FBMUIsRUFBNkI7QUFDNUIsSUFBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixhQUFwQjtBQUNBLEVBRkQsTUFFTyxJQUFJLElBQUksT0FBSixDQUFZLE9BQVosSUFBdUIsQ0FBM0IsRUFBOEI7QUFDcEMsSUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixhQUF2QjtBQUNBO0FBQ0QsS0FBRyxJQUFJLE9BQUosQ0FBWSxTQUFaLElBQXlCLENBQTVCLEVBQStCO0FBQzlCLElBQUUsVUFBRixFQUFjLFFBQWQsQ0FBdUIsYUFBdkI7QUFDQSxFQUZELE1BRU8sSUFBSSxJQUFJLE9BQUosQ0FBWSxTQUFaLElBQXlCLENBQTdCLEVBQWdDO0FBQ3RDLElBQUUsVUFBRixFQUFj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QUFGLEVBQW1CLElBQW5CO0FBQ0EsSUFBRSxjQUFGLEVBQWtCLElBQWxCO0FBQ0csRUFMRjs7QUFPQyxHQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBVztBQUNwQyxNQUFNLFlBQVksRUFBRSxlQUFGLENBQWxCO0FBQ0EsWUFBVSxRQUFWLENBQW1CLFNBQW5CO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLElBQW5CO0FBQ0EsSUFBRSxjQUFGLEVBQWtCLElBQWxCO0FBQ0UsRUFMRDs7QUFPQSxHQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBVztBQUNwQyxNQUFNLFlBQVksRUFBRSxlQUFGLENBQWxCO0FBQ0EsWUFBVSxRQUFWLENBQW1CLFNBQW5CO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLElBQW5CO0FBQ0EsSUFBRSxjQUFGLEVBQWtCLElBQWxCO0FBQ0EsRUFMQztBQU1ILENBbEVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4kKCcjaG9tZUxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG59KTtcbmNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuaWYodXJsLmluZGV4T2YoJ2dvb2RzJykgPiAwIHx8IHVybC5pbmRleE9mKCdnYW1lcycpID4gMCB8fCB1cmwuaW5kZXhPZigncGFydHknKSA+IDApIHtcblx0JCgnI2Ryb3Bkb3duSG92ZXInKS5hZGRDbGFzcygnY3VycmVudExpbmsnKTtcbn0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2dvb2RzJykgPCAwICkge1xuXHQkKCcjZHJvcGRvd25Ib3ZlcicpLnJlbW92ZUNsYXNzKCdjdXJyZW50TGluaycpO1xufVxuaWYodXJsLmluZGV4T2YoJ2luZGV4JykgPiAwKSB7XG5cdCQoJyNob21lJykuYWRkQ2xhc3MoJ2N1cnJlbnRMaW5rJyk7XG59IGVsc2UgaWYgKHVybC5pbmRleE9mKCdpbmRleCcpIDwgMCkge1xuXHQkKCcjaG9tZScpLnJlbW92ZUNsYXNzKCdjdXJyZW50TGluaycpO1xufVxuaWYodXJsLmluZGV4T2YoJ2NvbnRhY3QnKSA+IDApIHtcblx0JCgnI2NvbnRhY3QnKS5hZGRDbGFzcygnY3VycmVudExpbmsnKTtcbn0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2NvbnRhY3QnKSA8IDApIHtcblx0JCgnI2NvbnRhY3QnKS5yZW1vdmVDbGFzcygnY3VycmVudExpbmsnKTtcbn1cbmlmKHVybC5pbmRleE9mKCdhYm91dCcpID4gMCkge1xuXHQkKCcjYWJvdXQnKS5hZGRDbGFzcygnY3VycmVudExpbmsnKTtcbn0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2NvbnRhY3QnKSA8IDApIHtcblx0JCgnI2Fib3V0JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnRMaW5rJyk7XG59XG5pZih1cmwuaW5kZXhPZignY29sbGFib3JhdGlvbicpID4gMCkge1xuXHQkKCcjY29sbGFib3JhdGlvbicpLmFkZENsYXNzKCdjdXJyZW50TGluaycpO1xufSBlbHNlIGlmICh1cmwuaW5kZXhPZignY29udGFjdCcpIDwgMCkge1xuXHQkKCcjY29sbGFib3JhdGlvbicpLnJlbW92ZUNsYXNzKCdjdXJyZW50TGluaycpO1xufVxuaWYodXJsLmluZGV4T2YoJ2hvdy1pdC13b3JrcycpID4gMCkge1xuXHQkKCcjaG93V29ya3MnKS5hZGRDbGFzcygnY3VycmVudExpbmsnKTtcbn0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2NvbnRhY3QnKSA8IDApIHtcblx0JCgnI2hvd1dvcmtzJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnRMaW5rJyk7XG59XG59KTtcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRjb25zb2xlLmxvZygnbG9hZGVkJyk7XG5cdCQoJyNoYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCcuaGFtYnVyZ2VyTWVudScpLnNsaWRlVG9nZ2xlKCk7XG5cdH0pXG4gICAgJCgnLnBhcnR5LXRpbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCAkY2xpY2tlZCA9ICQoZS50YXJnZXQpO1xuXHRcdFx0Y29uc3QgaW5kZXggPSAkY2xpY2tlZC5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cdFx0XHQkKCcuaG9sZEdhbGxlcnknKS5zaG93KCk7XG5cdFx0XHRjb25zdCAkY2Fyb3VzZWwgPSAkKCcubWFpbi1nYWxsZXJ5Jyk7XG5cdFx0XHQkY2Fyb3VzZWwuc2hvdygpO1xuXHRcdFx0JCgnLm1haW4tZ2FsbGVyeScpLmZsaWNraXR5KHtcblx0XHRcdFx0d3JhcEFyb3VuZDogdHJ1ZSxcblx0XHRcdFx0aW5pdGlhbEluZGV4OiBpbmRleCxcblx0XHRcdFx0Y2VsbFNlbGVjdG9yOiAnLmdhbGxlcnktY2VsbCcsXG5cdFx0XHRcdHBhZ2VEb3RzOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcblx0XHQkKCcuZ29vZHMtdGlsZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdGNvbnN0ICRjbGlja2VkID0gJChlLnRhcmdldCk7XG5cdFx0XHRjb25zdCBpbmRleCA9ICRjbGlja2VkLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblx0XHRcdCQoJy5ob2xkR2FsbGVyeScpLnNob3coKTtcblx0XHRcdGNvbnN0ICRjYXJvdXNlbCA9ICQoJy5tYWluLWdhbGxlcnknKTtcblx0XHRcdCRjYXJvdXNlbC5zaG93KCk7XG5cdFx0XHQkKCcubWFpbi1nYWxsZXJ5JykuZmxpY2tpdHkoe1xuXHRcdFx0XHR3cmFwQXJvdW5kOiB0cnVlLFxuXHRcdFx0XHRpbml0aWFsSW5kZXg6IGluZGV4LFxuXHRcdFx0XHRjZWxsU2VsZWN0b3I6ICcuZ2FsbGVyeS1jZWxsJyxcblx0XHRcdFx0cGFnZURvdHM6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0JCgnLmdhbWUtdGlsZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdGNvbnN0ICRjbGlja2VkID0gJChlLnRhcmdldCk7XG5cdFx0XHRjb25zdCBpbmRleCA9ICRjbGlja2VkLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblx0XHRcdCQoJy5ob2xkR2FsbGVyeScpLnNob3coKTtcblx0XHRcdGNvbnN0ICRjYXJvdXNlbCA9ICQoJy5tYWluLWdhbGxlcnknKTtcblx0XHRcdCRjYXJvdXNlbC5zaG93KCk7XG5cdFx0XHQkKCcubWFpbi1nYWxsZXJ5JykuZmxpY2tpdHkoe1xuXHRcdFx0XHR3cmFwQXJvdW5kOiB0cnVlLFxuXHRcdFx0XHRpbml0aWFsSW5kZXg6IGluZGV4LFxuXHRcdFx0XHRjZWxsU2VsZWN0b3I6ICcuZ2FsbGVyeS1jZWxsJ1xuXHRcdFx0fSk7XG5cdFx0fSlcbiAgICBcbiAgXHQkKCcucGFydHktY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICRjYXJvdXNlbCA9ICQoJy5tYWluLWdhbGxlcnknKTtcblx0XHRcdCRjYXJvdXNlbC5mbGlja2l0eSgnZGVzdHJveScpO1xuXHRcdCQoJy5tYWluLWdhbGxlcnknKS5oaWRlKCk7XG5cdFx0JCgnLmhvbGRHYWxsZXJ5JykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmdvb2RzLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkY2Fyb3VzZWwgPSAkKCcubWFpbi1nYWxsZXJ5Jyk7XG5cdFx0XHQkY2Fyb3VzZWwuZmxpY2tpdHkoJ2Rlc3Ryb3knKTtcblx0XHRcdCQoJy5tYWluLWdhbGxlcnknKS5oaWRlKCk7XG5cdFx0XHQkKCcuaG9sZEdhbGxlcnknKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZ2FtZXMtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICRjYXJvdXNlbCA9ICQoJy5tYWluLWdhbGxlcnknKTtcblx0XHRcdCRjYXJvdXNlbC5mbGlja2l0eSgnZGVzdHJveScpO1xuXHRcdFx0JCgnLm1haW4tZ2FsbGVyeScpLmhpZGUoKTtcblx0XHRcdCQoJy5ob2xkR2FsbGVyeScpLmhpZGUoKTtcblx0XHR9KTtcbn0pO1xuXG4iXX0=
