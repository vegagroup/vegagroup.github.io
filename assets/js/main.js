/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
})(jQuery);

$(document).ready(function () {
	$(".tooltip").tooltipster({
		'theme': 'tooltipster-noir'
	});
	$("form").submit(() => {
		$("form").LoadingOverlay("show", {background: 'rgba(78, 185, 128, 0.5)'});
		setTimeout(() => {
			$("form").LoadingOverlay("hide");
			alert("We are sorry, an error has occurred.");
		}, Math.random() * (2000 - 500) + 500);
		return false;
	});
});