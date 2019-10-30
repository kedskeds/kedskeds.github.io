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

  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".bg-img"
  });

  // var rellax = new Rellax('.rellax');

  $('nav a').click(function () {
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top }, 'slow');
    return false;
  })

  $(".expand").on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('expanded');
    if($(this).hasClass('expanded')) {
      $(this).text('Show Less');
      $(".project.hide").removeClass("hide");
    } else {
      $(this).text('Show More');
      $(".project.postIndex").addClass("hide");
    }
    // $(this).hide();
  })

  // ScrollMagic

  var controller = new ScrollMagic.Controller();

  // build scenes
  var navItems = $('.header nav ul li a')
  for(var i = 0; i < navItems.length; i++) {
    var item = navItems[i]
    var id = '#' + $(item).attr('id')
    var href = $(item).attr('href')

    new ScrollMagic.Scene({triggerElement: href, triggerHook: 'onLeave', offset: -5, duration: $(href).height() })
      .setClassToggle(id, "active")
      // .addIndicators()
      .addTo(controller);
  }
})

// $(function() {
//   $('.scroll-btn').click (function() {
//     $('html, body').animate({scrollTop: $('section#about').offset().top }, 'slow');
//     return false;
//   });
// });
