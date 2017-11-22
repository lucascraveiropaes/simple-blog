$(document).ready(sidebar());

$(window).resize(sidebar());

$(document).ready(function(){
	$('nav.sidebar a.button').click(function(){
		$(this).toggleClass('open');
		$(".menu-links").toggleClass("toggled");
	});
});

function sidebar() {
	var width = $(window).width();

  	if(width < 768) {
  		$("nav").addClass("sidebar");
  	}
}