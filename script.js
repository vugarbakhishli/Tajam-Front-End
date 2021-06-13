$(function(){
	$(window).on("scroll", function() {
		if ($(window).scrollTop() >= 300) {
			$('nav').addClass('scrool');
		}
		else {
			$('nav').removeClass('scrool');
		}
});


$(function(){
AOS.init();
});

$(function(){
	new ModalVideo('.play-btn', {channel: 'youtube'});
});
	
















});

