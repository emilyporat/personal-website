var myNav = document.getElementById('my-nav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
    	myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    } 
    else {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
};

function slideDown() {
	var h = Math.max(document.documentElement.clientHeight);
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
	window.open(target,"_self");
}