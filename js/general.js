$(document).ready(function(){

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

var offsetTop = 50;

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop > offsetTop){
    $("#arrow-up").fadeIn(200);
  }
  if(scrollTop <= offsetTop){
    $("#arrow-up").fadeOut(200);
  }
});

function slideDown() {
	var h = jQuery(window).height();
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
	var section = document.getElementById(sectionId).getBoundingClientRect();
	window.scroll({
	  top: section.top + window.pageYOffset, 
	  left: 0, 
	  behavior: 'smooth' 
	});	
}

function openPage(target) {
 	$("body").fadeOut(400,function(){
       window.location.replace(target);
    });

}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
    
    var y = document.getElementById("hamburger");
    if (y.className == "fa fa-times") {
      $(".nav-item").slideUp(function() {
          $(".nav-logo").show();
      });
    	y.className = "fa fa-bars";
    } else {
      $(".nav-logo").hide();
      $(".nav-item").slideDown();
    	y.className = "fa fa-times"
    }
}



