
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

/*	personal imgs expand ;*/

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


  /*	work imgs expand ;*/

/*** image 29 ***/ 
$('*[data-work-image="29"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-nine').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-nine').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 28 ***/ 
$('*[data-work-image="28"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-eight').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-eight').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 27 ***/ 
$('*[data-work-image="27"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-seven').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-seven').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 26 ***/ 
$('*[data-work-image="26"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-six').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-six').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 25 ***/ 
$('*[data-work-image="25"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-five').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-five').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 24 ***/ 
$('*[data-work-image="24"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-four').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-four').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 23 ***/ 
$('*[data-work-image="23"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-three').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-three').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 22 ***/ 
$('*[data-work-image="22"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-two').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-two').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 21 ***/ 
$('*[data-work-image="21"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty-one').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty-one').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 20 ***/ 
$('*[data-work-image="20"]').click(function(e) {
  $('#work-image-fullscreen-container.twenty').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twenty').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 19 ***/ 
$('*[data-work-image="19"]').click(function(e) {
  $('#work-image-fullscreen-container.nineteen').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.nineteen').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 18 ***/ 
$('*[data-work-image="18"]').click(function(e) {
  $('#work-image-fullscreen-container.eighteen').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.eighteen').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 17 ***/ 
$('*[data-work-image="17"]').click(function(e) {
  $('#work-image-fullscreen-container.seventeen').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.seventeen').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 16 ***/ 
$('*[data-work-image="16"]').click(function(e) {
  $('#work-image-fullscreen-container.sixteen').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.sixteen').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 15 ***/ 
$('*[data-work-image="15"]').click(function(e) {
  $('#work-image-fullscreen-container.fifteen').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.fifteen').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 14 ***/ 
$('*[data-work-image="14"]').click(function(e) {
  $('#work-image-fullscreen-container.fourteen').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.fourteen').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 13 ***/ 
$('*[data-work-image="13"]').click(function(e) {
  $('#work-image-fullscreen-container.thirteen').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.thirteen').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 12 ***/ 
$('*[data-work-image="12"]').click(function(e) {
  $('#work-image-fullscreen-container.twelve').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.twelve').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 11 ***/ 
$('*[data-work-image="11"]').click(function(e) {
  $('#work-image-fullscreen-container.eleven').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.eleven').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 10 ***/ 
$('*[data-work-image="10"]').click(function(e) {
  $('#work-image-fullscreen-container.ten').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.ten').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 09 ***/ 
$('*[data-work-image="09"]').click(function(e) {
  $('#work-image-fullscreen-container.nine').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.nine').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 08 ***/ 
$('*[data-work-image="08"]').click(function(e) {
  $('#work-image-fullscreen-container.eight').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.eight').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 07 ***/ 
$('*[data-work-image="07"]').click(function(e) {
  $('#work-image-fullscreen-container.seven').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.seven').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 06 ***/ 
$('*[data-work-image="06"]').click(function(e) {
  $('#work-image-fullscreen-container.six').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.six').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 05 ***/ 
$('*[data-work-image="05"]').click(function(e) {
  $('#work-image-fullscreen-container.five').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.five').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 04 ***/ 
$('*[data-work-image="04"]').click(function(e) {
  $('#work-image-fullscreen-container.four').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.four').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 03 ***/ 
$('*[data-work-image="03"]').click(function(e) {
  $('#work-image-fullscreen-container.three').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.three').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 02 ***/ 
$('*[data-work-image="02"]').click(function(e) {
  $('#work-image-fullscreen-container.two').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.two').click(function(e) {
  $(this).toggleClass('fullscreen');
});

/*** image 01 ***/ 
$('*[data-work-image="01"]').click(function(e) {
  $('#work-image-fullscreen-container.one').toggleClass('fullscreen');
});
$('#work-image-fullscreen-container.one').click(function(e) {
  $(this).toggleClass('fullscreen');
});


});

