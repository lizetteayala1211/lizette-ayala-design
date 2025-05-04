

////// Language Toggle EN/SP Global //////

function setLanguageToEnglish() {

    $('[lang="sp"]').hide();
    $('#landing [lang="en"]').css('display', 'block');
    $('#global [lang="en"]').css('display', 'block');
    $('p.en.toggleable-english-text').css('display', 'block');
    $('button.en.toggleable-english-text').css('display', 'block');
  
    if (window.localStorage) { localStorage.setItem("language", "english"); }
  }
  function setLanguageToSpanish() {
    $('[lang="sp"]').show();
    $('#landing [lang="en"]').css('display', 'none');
    $('#global [lang="en"]').css('display', 'none');
    $('p.en.toggleable-english-text').css('display', 'none');
    $('button.en.toggleable-english-text').css('display', 'none');
    $('button.sp.toggleable-spanish-text').css('display', 'block');
  
  
    if (window.localStorage) { localStorage.setItem("language", "spanish"); }
    // localStorage.language = "spanish"
  }
  
  if (window.localStorage && localStorage.getItem("language") == "spanish") {
    setLanguageToSpanish()
  }
  
    // Switching to English
    $(".language-en-button").on("click", setLanguageToEnglish);
  
    // Switching to Spanish
    $(".language-sp-button").on("click", setLanguageToSpanish);