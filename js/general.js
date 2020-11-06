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

function passProtect(page) {
  var promptCount = 0;
  window.pw_prompt = function(options) {
      var lm = options.lm || "Password:",
          bm = options.bm || "Submit";
      if(!options.callback) { 
          alert("No callback function provided! Please provide one.") 
      };
            
      var background = document.createElement("div");
      background.id = "modal_background";

      var prompt = document.createElement("div");
      prompt.className = "pw_prompt";
      background.appendChild(prompt);

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == background) {
          background.style.display = "none";
        }
      }

      var submit = function() {
          options.callback(input.value);
          document.body.removeChild(prompt);
      };

      var label = document.createElement("label");
      label.textContent = lm;
      label.for = "pw_prompt_input" + (++promptCount);
      prompt.appendChild(label);

      var input = document.createElement("input");
      input.id = "pw_prompt_input" + (promptCount);
      input.type = "password";
      input.addEventListener("keyup", function(e) {
          if (e.keyCode == 13) submit();
      }, false);
      prompt.appendChild(input);

      var button = document.createElement("button");
      button.textContent = bm;
      button.addEventListener("click", submit, false);
      prompt.appendChild(button);

      document.body.appendChild(background);
  }; 
  
  pw_prompt({
    lm:"Please enter the password:", 
    callback: function(password) {
        if (password == 'emilyp') {
          location.href = page;
        }
    }
}); 
}




// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// function passProtect() { 
//   var password = $( "#password" );
//   var page = $( "#password" );
//   console.log(password, page);

//   if (password=='emilyp') {
//     top.location.href=page;    
//   }

//   else {
//     window.location="projects.html";
//   }
// }

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

