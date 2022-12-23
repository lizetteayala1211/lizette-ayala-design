
/*	sections show & hide ;*/

$(document).ready(function(){


$(".about-link").click(function(){
	$('#all-content-container').addClass('fade', 100);
	$("#all-content-container").children().hide();
	$('#all-content-container').removeClass('fade', 100);
	$("#about-container").slideToggle(1000);
	$("#about-container").css('display', 'flex');
});

$(".pub-link").click(function(){
	$('#all-content-container').addClass('fade', 100);
	$("#all-content-container").children().hide();
	$('#all-content-container').removeClass('fade', 100);
	$("#publications-container").show(1000);
	$("#publications-container").css('display', 'flex');

});

$(".work-link").click(function(){
	$('#all-content-container').addClass('fade', 100);
	$("#all-content-container").children().hide();
	$('#all-content-container').removeClass('fade', 100);
	$("#work-container").slideToggle(1000);

});

$(".personal-link").click(function(){
	$('#all-content-container').addClass('fade', 100);
	$("#all-content-container").children().hide();
	$('#all-content-container').removeClass('fade', 1000);
	$("#personal-container").slideToggle(1000);
	$("#personal-container").css('display', 'flex');

});


/*** image 1 ***/ 
  $('[data-personal-image="1"]').click(function(e) {
    // Change Selector Here
     $('#personal-image-fullscreen-container.one').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.one').click(function(e) {
    $(this).toggleClass('fullscreen');
  });


/*** image 2 ***/   
    $('[data-personal-image="2"]').click(function(e) {
     $('#personal-image-fullscreen-container.two').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.two').click(function(e) {
    $(this).toggleClass('fullscreen');
  });  


/*** image 3 ***/     
  $('[data-personal-image="3"]').click(function(e) {
     $('#personal-image-fullscreen-container.three').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.three').click(function(e) {
    $(this).toggleClass('fullscreen');
  });  


/*** image 4 ***/   
  $('[data-personal-image="4"]').click(function(e) {
     $('#personal-image-fullscreen-container.four').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.four').click(function(e) {
    $(this).toggleClass('fullscreen');
  });


/*** image 5 ***/   
  $('[data-personal-image="5"]').click(function(e) {
     $('#personal-image-fullscreen-container.five').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.five').click(function(e) {
    $(this).toggleClass('fullscreen');
  }); 


/*** image 6 ***/   
  $('[data-personal-image="6"]').click(function(e) {
     $('#personal-image-fullscreen-container.six').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.six').click(function(e) {
    $(this).toggleClass('fullscreen');
  });


/*** image 7 ***/   
  $('[data-personal-image="7"]').click(function(e) {
     $('#personal-image-fullscreen-container.seven').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.seven').click(function(e) {
    $(this).toggleClass('fullscreen');
  });


/*** image 8 ***/   
  $('[data-personal-image="8"]').click(function(e) {
     $('#personal-image-fullscreen-container.eight').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.eight').click(function(e) {
    $(this).toggleClass('fullscreen');
  });


/*** image 9 ***/ 
  $('[data-personal-image="9"]').click(function(e) {
    $('#personal-image-fullscreen-container.nine').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.nine').click(function(e) {
    $(this).toggleClass('fullscreen');
  });


/*** image 10 ***/ 
  $('*[data-personal-image="10"]').click(function(e) {
    $('#personal-image-fullscreen-container.ten').toggleClass('fullscreen');
  });
  $('#personal-image-fullscreen-container.ten').click(function(e) {
    $(this).toggleClass('fullscreen');
  });

});