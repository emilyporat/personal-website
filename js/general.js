var passwordChecked = false;

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (booleanValue) {
//     x.style.display = "none";
//     booleanValue = false;
//   } else {
//     x.style.display = "block";
//   booleanValue = true;
//   }
// }


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

    if (password == 'ep23') {
      passwordChecked = true;
      $('html,body').scrollTop(0);
      $("#modal_background").fadeOut("200ms");
      document.getElementById("modal_background").display = "none";
    } 

    else if ($("#error_message").length != 1) {
      var error_message = document.createElement("div");
      error_message.id = "error_message";
      error_message.textContent = "Wrong password, try again.";
      
      var prompt = $("#prompt");
      prompt.append(error_message);
    }  
}


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
	var h = document.getElementById("summary").offsetTop - 80;
  console.log(h);
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



$(document).ready(function () {
    $('.big-pic').animate({'opacity':'1'},900);
    $('.title').animate({'opacity':'1'},900);
});



function caseStudyClick(name) {
  window.htevents.track("caseStudyClick", {pageName: name});
}

