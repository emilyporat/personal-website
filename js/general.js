$(document).ready(function(){
    // $('#home-text').fadeIn(1800);


	// var myNav = document.getElementById('my-nav');
	// window.onscroll = function () { 
	//     "use strict";
	//     if (document.body.scrollTop >= 200 ) {
	//     	myNav.classList.add("nav-transparent");
	//         myNav.classList.remove("nav-colored");
	//     } 
	//     else {
	//         myNav.classList.add("nav-colored");
	//         myNav.classList.remove("nav-transparent");
	//     }
	// };

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.section').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object - 250) ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        });
    
    });

});


document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "I care about human centered design", 
  				   "I enojy writing clean, efficient code", 
  				   "and, ultimately", 
  				   "I want to improve people's lives with technology"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

function slideDown() {
	var navHeight = $("#my-nav").height();
	var h = jQuery(window).height() - navHeight;
	window.scroll({
	  top: h, 
	  left: 0, 
	  behavior: 'smooth' 
	});	
}

function slideUp() {
	window.scroll({
	  top: 0, 
	  left: 0, 
	  behavior: 'smooth' 
	});
}

function slideToSection(sectionId) {
	console.log(sectionId);
	var section = document.getElementById(sectionId).getBoundingClientRect();
	window.scroll({
	  top: section.top + window.pageYOffset - 50, 
	  left: 0, 
	  behavior: 'smooth' 
	});	
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function openPage(target) {

 	$("body").fadeOut(400,function(){
       window.location.replace(target);
    });

}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
    $(".nav-item").slideToggle();
    var y = document.getElementById("hamburger");
    if (y.className == "fa fa-times") {
    	y.className = "fa fa-bars";
    } else {
    	y.className = "fa fa-times"
    }
}



