(function () {
	'use strict';

	$('.tool-draw').on('click', function (e) {
		$('.tool-draw').toggleClass('active');
		e.stopPropagation();
	})


})();