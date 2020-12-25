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
if (window.location == "emilyporat.com/chris.html") {
  $(document).ready(function(){ 
  document.getElementById('Compliment').style.display = "block";
  document.getElementById('complimentTab').className += " active";
});
}


  var compliments = [
                      "Chris is the bees knees! He's actually full of 30,000 bees, in fact. Buzz, buzz.", 
                      "Chris can type very well and knows alllll the keyboard shortcuts. Mans barely even needs a mouse #madskillz.", 
                      "Chris looks super cute with a collared shirt under a sweater, like a nice J.Crew model", 
                      "Chris could pull off  a cowboy hat. Yeehaw!", 
                      "Bean likes to sit on Chris. He has a nice, warm lap, fit for a cat!", 
                      "Chris makes an excellent sous chef. He can chop like there's no tomorrow.",
                      "Chris can identify several birds. Pretty impressive, huh? How many birds can you identify??",
                      "Chris likes to learn fun facts on Wikipedia. He's basically a walking encyclopedia!",
                      "Chris can bench press 110 pounds! So strong baby! That's like 6 large watermelons!",
                    ]; 

  var date = [
              "Picnic at the Kennedy Center with meats & cheeses & wine oh my!",
              "Spa World is apparently a good time",
              "Bowling or Bocce at Pinstripes in Georgetown",
              "Second City standup comedy livestream - every Thursday at 7!",
              "Drive-in movie at Park Up DC - RFK Stadium (Southeast)",
              "Virtual wine & cheese tasting",
              "Play Groupon roulette - login to your local Groupon page and click on 'things to do'. Pick one thing from the first five choices that pop up",
              "Listen to a cozy wintry audiobook by the fire",
              "Have a cook-off: each cook different versions of a similar meal and then rate each on taste and presentation",
              "Host a virtual double date with Cam or Tara",
              "Host a one-on-one karaoke night.",
              "Take an online dance class together"
              ];

  var selfcare = [
                  "Take a bubble bath and listen to a nerdy podcast!",
                  "Do a ten minute guided meditation",
                  "Journaling prompt: today, I am most grateful for _ because _. Your prompt is to simply list 5 things that you're grateful for, and to describe why and how you are grateful for it, in 1 to 3 sentences, for each item.",
                  "Journaling prompt: today, the top 3 feeling-states that I wish to create, share, or experience with others around me are: _, _ and _. If you could ideally experience three 'feeling states' (or emotional experiences) on any given day, what three feeling states would you want to feel? And, why? What is it about those feeling states that matter to you?",
                  "Journaling prompt: By the time my head hits the pillow tonight, I intend to feel like I really _. By the time you go to bed tonight, what do you want to feel like you really put out there, feel proud of, wont have a regret about, or feel fulfilled by?",
                  "Connect with a friend - make plans to hang out with someone or simply tell them that you're thinking of them.",
                  "Check in with yourself about your goals for the week, month, year. What's stopping you from accomplishing those things?",
                  "Start thinking about a future vacation or any plan that excites you!",
                  "Find a healthy recipe that you're excited to make!",
                  ];

var options = [compliments, date, selfcare];


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  var index1 = Math.floor(Math.random() * options[0].length); // randomly pick one
  var index2 = Math.floor(Math.random() * options[1].length); // randomly pick one
  var index3 = Math.floor(Math.random() * options[2].length); // randomly pick one

  var oldCompliment = $(".chrisCard");
  oldCompliment[0].innerHTML = options[0][index1];
  oldCompliment[1].innerHTML = options[1][index2];
  oldCompliment[2].innerHTML = options[2][index3];

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


function addCompliment(number) {

  var oldCompliment = $(".chrisCard")[number];

  var index = Math.floor(Math.random() * options[number].length); // randomly pick one
  var compliment = options[number][index]; // pick item from list
  console.log(index, compliment);

  oldCompliment.innerHTML = compliment;
}

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

