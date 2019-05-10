var widths = ['100px', '50px', '80px', '20px', '30px']
var colorClasses = ['c-b', 'c-g', 'c-o', 'c-y', 'spacer', 'spacer', 'spacer', 'spacer', 'spacer']

function getRand(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min
}

function randArrVal(arr) {
  return arr[getRand(0, arr.length - 1)]
}


function writeCode() {
	var code = $(".screen .code")
	for(var i = 0; i < code.length; i++) {
	  $(code[i]).css('width', randArrVal(widths))
	  $(code[i]).addClass(randArrVal(colorClasses))
	}
}

function revealLines() {
	var lines = $(".line")

	for(var i = 0; i < lines.length; i++) {
	  // if(i % 5 !== 0) {
	    $(lines[i]).addClass('line-reveal')
	  // }
	}
}

function animateIn() {
  $(".intro--text").addClass("fade-right");
  $(".editor").addClass("zoom-in");
}


$(document).ready(function() {
  animateIn();

  writeCode();
  revealLines();

  var rellax = new Rellax('.rellax');
})

// $(function() {
//   $('.scroll-btn').click (function() {
//     $('html, body').animate({scrollTop: $('section#about').offset().top }, 'slow');
//     return false;
//   });
// });
