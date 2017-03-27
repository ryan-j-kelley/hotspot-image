// alert("Hello, World!");
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	$('.circle').on('click', function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		var circleClick = $(this),
			text = circleClick.data('text'); //looks for the data-text attribute and stores its value

		// Traverse DOM to the closest .photo-container ancestor and then
		// 	find a descendant of that ancestor with the selector .info_slides. This
		// 	allows us to only trigger and manipulate the pop up for the clicked circle's
		// 	photo container

		popUp = circleClick.closest('.photo-container').find('.info-slide'),
			popUp_text = popUp.find(".info-popIn");
		// find this popups text container

		popUp_text.text(text); //injects text into popup
		popUp.addClass('active'); //then shows the popup

	});

	$('.btn-close').on('click', function (e) {
		e.preventDefault();

		var closeButtonClicked = $(this),
			popUp = closeButtonClicked.closest('.info-slide');
		//figures out which popup is open

		popUp.removeClass('active');
		//removes the active class from the triggered popup

	});
});
