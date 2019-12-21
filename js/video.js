let pauseButton = $('.ba-section-intro__video-pause');

pauseButton.hide()

let playButton = $('.ba-section-intro__video-play');

playButton.on('click', function () {

	$(this).hide();
	$(this).parent().find('video')[0].play();
	
	pauseButton.show(); 
});

pauseButton.on('click', function(){

	$(this).hide();
	$(this).parent().find('video')[0].pause();

	playButton.show();
});