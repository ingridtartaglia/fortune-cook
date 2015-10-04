$(document).ready(function(){
	var fortuneQuotes = [
		"A smile is your passport into the hearts of others.",
		"Meeting adversity well is the source of your strength.",
		"You are the controller of your destiny.",
		"Happiness is only real when shared.",				
		"Pray for what you want, but work for the things you need.",
		"Stay true to those who would do the same for you.",
		"Your fortune is as sweet as a cookie.",
		"Conquer your fears or they will conquer you.",
		"Some men dream of fortunes, others dream of cookies.",
		"The greatest danger could be your stupidity.",
		"A conclusion is simply the place where you got tired of thinking.",
		"If opportunity doesn't knock, build a door.",
	];
	
	$(".fc-img").click(function(){
		$(".fc-quote-div").remove();
		$("div:last-of-type").append("<div class='fc-quote-div'><p class='fc-quote'>" + 
			fortuneQuotes[Math.floor(Math.random()*fortuneQuotes.length)] + "</p></div>");
		$(".fc-quote-div").addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function(){
				$(this).removeClass('animated zoomIn');
			});
	});
	
});