$(document).ready(function(){
    $('#home-text').fadeIn(1800);

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





