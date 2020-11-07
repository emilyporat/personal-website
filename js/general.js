// $(window).load(function() {
//   $("body").removeClass("preload");
// });

// $(document).ready(function(){

// /*! Fades in whole page on load */
// $('body').css('display', 'none');
// $('body').fadeIn(200);

// }); 

/*! Reloads page on every visit */
// function Reload() {
// try {
// var headElement = document.getElementsByTagName("head")[0];
// if (headElement && headElement.innerHTML)
// headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
// }
// catch (e) {}
// }

/*! Reloads on every visit in mobile safari */
// if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
// window.onpageshow = function(evt) {
// if (evt.persisted) {
// document.body.style.display = "none";
// location.reload();
// }
// };
// }

// $("#pw_prompt_input1").addEventListener("keyup", function(e) {
//     if (e.keyCode == 13) submit();
// }, false);

$('#pw_prompt_input1').keypress(function (e) {
  if (e.which == 13) {
    checkPassword();
    return false;    //<---- Add this line
  }
});

function checkPassword() {
    // lol ;)
    var password = $("#pw_prompt_input1").val();
    console.log(password);

    if (password == 'emilyp') {
      $('html,body').scrollTop(0);
      $("#modal_background").fadeOut("200ms");
    } 

    else if ($("#error_message").length != 1) {
      var error_message = document.createElement("div");
      error_message.id = "error_message";
      error_message.textContent = "Wrong password, try again.";
      
      var prompt = $("#prompt");
      prompt.append(error_message);
    }  
}


/* hide nav on scroll down */
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
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
	var h = document.getElementById("projects").offsetTop;
  $("html, body").animate({ scrollTop: h }, "slow");
}

function slideUp() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
} 

function slideToSection(sectionId) {
	var section = document.getElementById(sectionId).getBoundingClientRect();
	window.scroll({
	  top: section.top + window.pageYOffset, 
	  left: 0, 
	  behavior: 'smooth' 
	});	
}

// $('a').click(function(e) {
//   if ($(event.target).text() == 'eporat@andrew.cmu.edu') {
//     return;
//   }
//   e.preventDefault();
//   newLocation = this.href;
//   $('body').fadeOut('slow', newpage);
//   });
//   function newpage() {
//   window.location = newLocation;
// }

function toggleNav() {
  
    var menu = document.getElementById("hamburger");
    console.log(menu);
    if (screen.width <= 900) {
      if (menu.className == "fas fa-times") {
        // nav is open, slide it back up
        $('#nav-items').animate({"top": '-=900'});
        menu.className = "fas fa-bars";
        onsole.log("closing");
      } else {
        // nav is closed, open it
        $('#nav-items').animate({"top": '+=900'});
        menu.className = "fas fa-times";
        console.log("opening");
      }      
    }
}

$('.big-pic').load(function() {
    var big_pic_height = $(".big-pic").height();
    var window_width = window.innerWidth;
    console.log("window width is", window_width);
    console.log("picture height is", big_pic_height);

    if (window_width > 770 && big_pic_height > 0) {
        $(".title-wrapper").css("height", big_pic_height);
        console.log("set title wrapper height to", big_pic_height);
    }
  });

$(document).ready(function() {
   
   /* Every time the window is scrolled ... */
   $(window).scroll( function(){
   
       /* Check the location of each desired element */
       $('.panel').each( function(i){
           
           var top_of_object = $(this).position().top;
           var bottom_of_window = $(window).scrollTop() + $(window).height();
           
           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > top_of_object ){
               
               $(this).animate({'opacity':'1'},700);
                   
           }
           
       }); 
   
   });
   
});

$(document).ready(function() {
   
   /* Every time the window is scrolled ... */
   $(window).scroll( function(){
   
       /* Check the location of each desired element */
       $('.section').each( function(i){
           
           var top_of_object = $(this).position().top;
           var bottom_of_window = $(window).scrollTop() + $(window).height();
           
           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > top_of_object ){
               
               $(this).animate({'opacity':'1'},700);
                   
           }
           
       }); 
   
   });
   
});

$(document).ready(function () {
    $('.big-pic').animate({'opacity':'1'},900);
    $('.title').animate({'opacity':'1'},900);
});

