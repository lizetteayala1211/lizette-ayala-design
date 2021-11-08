
/*	sections show & hide ;*/

$(document).ready(function(){

	// $('#texas-icon-container').addClass('opacity');
	// $('#texas-icon-container').removeClass('opacity');
	// $('#texas-icon-container').css("background-image", "url(./assets/icons/tripledtext.png)");

$(".about-link").click(function(){
	$('#all-content-container').addClass('fade', 100);
	$("#all-content-container").children().hide();
	$('#all-content-container').removeClass('fade', 100);
	$("#about-container").slideToggle(2000);
	$("#about-container").css('display', 'flex');
});

$(".pub-link").click(function(){
	$('#all-content-container').addClass('fade', 100);
	$("#all-content-container").children().hide();
	$('#all-content-container').removeClass('fade', 100);
	$("#publications-container").show(2000);
	$("#publications-container").css('display', 'flex');

});

$(".work-link").click(function(){
	$('#all-content-container').addClass('fade', 100);
	$("#all-content-container").children().hide();
	$('#all-content-container').removeClass('fade', 300);
	$("#work-container").slideToggle(2000);
	$("#work-container").css('display', 'flex');

});


});