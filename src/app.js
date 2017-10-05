$(document).ready(function(){
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
$(window).load(function() {
	console.log('loaded');
	$('#hamburger').on('click', function() {
		$('.hamburgerMenu').slideToggle();
	})
    $('.party-tile').on('click', function(e) {
			const $clicked = $(e.target);
			const index = $clicked.attr('data-index');
			$('.holdGallery').show();
			const $carousel = $('.main-gallery');
			$carousel.show();
			$('.main-gallery').flickity({
				wrapAround: true,
				initialIndex: index,
				cellSelector: '.gallery-cell',
				pageDots: false,
			});
		});
	
		$('.goods-tile').click(function(e) {
			const $clicked = $(e.target);
			const index = $clicked.attr('data-index');
			$('.holdGallery').show();
			const $carousel = $('.main-gallery');
			$carousel.show();
			$('.main-gallery').flickity({
				wrapAround: true,
				initialIndex: index,
				cellSelector: '.gallery-cell',
				pageDots: false,
			});
		});
		
		$('.game-tile').click(function(e) {
			const $clicked = $(e.target);
			const index = $clicked.attr('data-index');
			$('.holdGallery').show();
			const $carousel = $('.main-gallery');
			$carousel.show();
			$('.main-gallery').flickity({
				wrapAround: true,
				initialIndex: index,
				cellSelector: '.gallery-cell'
			});
		})
    
  	$('.party-close').click(function() {
			const $carousel = $('.main-gallery');
			$carousel.flickity('destroy');
		$('.main-gallery').hide();
		$('.holdGallery').hide();
    });

    $('.goods-close').click(function() {
			const $carousel = $('.main-gallery');
			$carousel.flickity('destroy');
			$('.main-gallery').hide();
			$('.holdGallery').hide();
    });

    $('.games-close').click(function() {
			const $carousel = $('.main-gallery');
			$carousel.flickity('destroy');
			$('.main-gallery').hide();
			$('.holdGallery').hide();
		});
});

