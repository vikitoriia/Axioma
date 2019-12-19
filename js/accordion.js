let accordion = $('.ba-accordion');

accordion.find('.ba-section-services__offer-subtitle').hide();

accordion.find('.ba-section-services__offer-title').on('click', function () {
	let clickedContent = $(this).next('.ba-section-services__offer-subtitle'); //Place DD into variable

	accordion.find('.ba-section-services__offer-subtitle:visible').not(clickedContent).slideUp();
	clickedContent.slideToggle();

	$(this).toggleClass('ba-section-services__offer-title--active'); 
});