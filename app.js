$(document).ready(function(){
	var fortuneText = ["Teste pra saber se o js deu certo ou nao", "oi"];
	var index = 0;
	
	$(".fc-img").click(function(){
		$(".fc-text-div").remove();
		$("div:last-of-type").append("<div class='fc-text-div'><p class='fc-text'>" + fortuneText[index] + "</p></div>");
	});
	
});