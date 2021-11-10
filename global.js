
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
	$('#all-content-container').removeClass('fade', 1000);
	$("#work-container").slideToggle(4000);
	// $("#work-row.twenty").css('opacity', '1');
	// $("#work-row.nineteen").delay(9000).css('opacity', '1');
	// $("#work-container").css('display', 'flex');
	// $("#work-row.twenty").css('display', 'flex');
	// $("#work-row.twenty").fadeIn("5000");
	// $("#work-row.nineteen").css('display', 'flex');
	// $("#work-row.nineteen").delay(9000).fadeIn("10000");
	// $("#work-row.eighteen").css('display', 'flex');
	// $("#work-row.eighteen").fadeIn("11000");
	// $("#work-row.seventeen").css('display', 'flex');
	// $("#work-row.seventeen").fadeIn("14000");
	// $("#work-row.sixteen").css('display', 'flex');
	// $("#work-row.sixteen").fadeIn("14000");
	// $("#work-row.fifteen").css('display', 'flex');
	// $("#work-row.fifteen").fadeIn("17000");
	// $("#work-row.fourteen").css('display', 'flex');
	// $("#work-row.fourteen").fadeIn("20000");
	// $("#work-row.thirteen").css('display', 'flex');
	// $("#work-row.thirteen").fadeIn("23000");
	// $("#work-row.twelve").css('display', 'flex');
	// $("#work-row.twelve").fadeIn("26000");
	// $("#work-row.eleven").css('display', 'flex');
	// $("#work-row.eleven").fadeIn("29000");
	// $("#work-row.ten").css('display', 'flex');
	// $("#work-row.ten").fadeIn("31000");
	// $("#work-row.nine").css('display', 'flex');
	// $("#work-row.nine").fadeIn("34000");
	// $("#work-row.eight").css('display', 'flex');
	// $("#work-row.eight").fadeIn("37000");
	// $("#work-row.seven").css('display', 'flex');
	// $("#work-row.seven").fadeIn("40000");
	// $("#work-row.six").css('display', 'flex');
	// $("#work-row.six").fadeIn("43000");
	// $("#work-row.five").css('display', 'flex');
	// $("#work-row.five").fadeIn("46000");
	// $("#work-row.four").css('display', 'flex');
	// $("#work-row.four").fadeIn("49000");
	// $("#work-row.three").css('display', 'flex');
	// $("#work-row.three").fadeIn("52000");
	// $("#work-row.two").css('display', 'flex');
	// $("#work-row.two").fadeIn("55000");
	// $("#work-row.one").css('display', 'flex');
	// $("#work-row.one").fadeIn("58000");

});


});