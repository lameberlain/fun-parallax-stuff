var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var menu = document.querySelector("#menu");

function setTranslate(x, y, el) {
	el.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
}
var pos = {};

(function () {
	document.onmousemove = handleMouseMove;
	setInterval(getMousePosition, 100); // setInterval repeats every X ms

	function handleMouseMove(event) {
		var dot, eventDoc, doc, body, pageX, pageY;
	event = event || window.event;
		mousePos = {
			x: event.pageX,
			y: event.pageY
		};
	}

	function getMousePosition() {
		pos = mousePos;
	}
})();

$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	console.log('scrollTop', scrollTop);
	if ( (scrollTop + 70) > $('#header').offset().top ) { 
		menu.style.top = '45px';
		if (scrollTop === $('#header').offset().top) {
			$('#header').css('backgroundColor', '#3a3941');
			menu.style.backgroundColor = '#3a3941';
		} else {
			$('#header').css('backgroundColor', '#484751');
			menu.style.backgroundColor = '#484751';
		}
		// menu.style.boxShadow = '-5px 8px 8px rgba(0, 0, 0, 0.1)'
	} else {
		$('#header').css('backgroundColor', '#484751');
		menu.style.top = '-90px';
		menu.style.backgroundColor = 'transparent';
		// menu.style.boxShadow = 'unset'
	}
});


var xScrollPosition;
var yScrollPosition;

var menuExpanded = false;
function menuToggle () {
	menuExpanded = (menuExpanded === true) ? false : true;
}
function scrollLoop () {
	xScrollPosition = window.scrollX;
	yScrollPosition = window.scrollY;
	// console.log('pos', pos);

	if (menuExpanded === true && $(window).width() < 801) {
		setTranslate(pos.x / 10, -40, one);
		setTranslate(pos.x / 75, (scrollY * 0.6) - 60, two);
		setTranslate(pos.x / 100, (scrollY * 0.9) - 10, three);
		menu.style.opacity = '1';
		menu.style.pointerEvents = 'auto';
	} else {
		// menu.style.display = 'none';
		menu.style.opacity = '0';
		menu.style.pointerEvents = 'none';
		setTranslate(pos.x / 10, 0, one);
		setTranslate(pos.x / 75, scrollY * 0.6, two);
		setTranslate(pos.x / 100, scrollY * 0.9, three);
	}
	requestAnimationFrame(scrollLoop);
}

window.addEventListener('DOMContentLoaded', scrollLoop, false);