$(document).ready(function(){

/*! Fades in whole page on load */
$('body').css('display', 'none');
$('body').fadeIn(500);

}); 

/*! Reloads page on every visit */
function Reload() {
try {
var headElement = document.getElementsByTagName("head")[0];
if (headElement && headElement.innerHTML)
headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
}
catch (e) {}
}

/*! Reloads on every visit in mobile safari */
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
window.onpageshow = function(evt) {
if (evt.persisted) {
document.body.style.display = "none";
location.reload();
}
};
}

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

$('a').click(function(e) {
  if ($(event.target).text() == 'eporat@andrew.cmu.edu') {
    return;
  }
  e.preventDefault();
  newLocation = this.href;
  $('body').fadeOut('slow', newpage);
  });
  function newpage() {
  window.location = newLocation;
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



