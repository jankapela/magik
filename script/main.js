//smooth scroll
$(document).ready(function() {

	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 800);
		}
	});

});

/* NAV */

var button = document.querySelector('.nav-button');
var nav = document.querySelector('.nav');
var sprawdz = 0;
var links = [link1, link2, link3, link4, link5, link6];

button.addEventListener('click', slideNav);

function slideNav(){

    if(sprawdz == 0) {
        nav.style.width = "100%";
        sprawdz = 1;
	}

    else {
        nav.style.width = "0";
        sprawdz = 0;
	}

}

for (var i = 0; i <= 6; i++) {
    links[i].addEventListener("click", slideNav);
}
