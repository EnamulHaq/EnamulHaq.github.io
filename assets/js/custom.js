(function ($) {
  'use strict'

  /* ----------------------------------------------------------- */
  /*  STRETCHY NAVIGATION
  /* ----------------------------------------------------------- */
  if ($('.cd-stretchy-nav').length > 0) {
    var stretchyNavs
    stretchyNavs = $('.cd-stretchy-nav');
    stretchyNavs.each(function () {
			let stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
				stretchyNavTrigger.on('click', function(event){
					event.preventDefault()
					stretchyNav.toggleClass('nav-is-visible')
				})
		})
		$(document).on('click', function(event){
				(!$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible')
    })
  }

  /* ----------------------------------------------------------- */
  /*  SHOW HIDE SECTION
  /* ----------------------------------------------------------- */
  $(document).ready(function () {
    $('.cd-stretchy-nav ul li a').click(function (event) {
      event.preventDefault()
      $('.cd-stretchy-nav ul li a').removeClass('active')
      $('.project-info-container').removeClass('slide-in')
      $('.work-container').removeClass('slide-out overfllow-hidden')
			$(this).addClass('active')
      var selectedMember = $(this).attr('href').replace('#', '')
      $('section').removeClass('active')
      $('section.' + selectedMember + '').addClass('active')
    })
	})
	
  /* ----------------------------------------------------------- */
  /*  ADD CLASS FOR MENU ITEM CHANGE COLOR
  /* ----------------------------------------------------------- */

  $('body .cd-stretchy-nav ul li a').on('click', function () {
    if ($(this).hasClass('home')) {
      $('.cd-stretchy-nav').removeClass('dark')
    } else {
      $('.cd-stretchy-nav').addClass('dark')
    }
  })
  $('.works').find('ul a').on('click', function (event) {
    $('.cd-stretchy-nav').removeClass('dark')
	})

  /* ----------------------------------------------------------- */
  /*  CHANGE BACKGROUND IMAGE AS INLINE CSS
  /* ----------------------------------------------------------- */
  $(document).ready(function () {
    $('[data-bg]').each(function () {
      var imgUrl = $(this).data('bg');
      $(this).css({
        background: 'url("' + imgUrl + '")'
      })
    })
	})
	/* ----------------------------------------------------------- */
  /*  SHOW AND HIDE PORTFOLIO SECTION AND ABOUT SECTION
  /* ----------------------------------------------------------- */
  $('.marko-action-button a').click(function (event) {
		event.preventDefault()
		if ($(this).hasClass('home')) {
      $('.cd-stretchy-nav').removeClass('dark')
    } else {
      $('.cd-stretchy-nav').addClass('dark')
    }
		var selectedMember = $(this).attr('href').replace('#', '')
    $('section').removeClass('active')
    $('section.' + selectedMember + '').addClass('active')
  })
  /* ----------------------------------------------------------- */
  /*  PORTFOLIO HIDE SLIDE
  /* ----------------------------------------------------------- */
  $(document).on('click', '.close-project, .portfolio-overlay', function (event) {
    event.preventDefault()
    $('.work-container').removeClass('slide-out overfllow-hidden')
    $('.project-info-container').removeClass('slide-in')
    $('.close-project').removeClass('is-visible')
    $('.cd-stretchy-nav').addClass('dark')
    $('.works').addClass('active')
  })

  /* ----------------------------------------------------------- */
  /*  SHOW HIDE PORTFOLIO INFO
  /* ----------------------------------------------------------- */
  $('.works').find('ul a').on('click', function (event) {
    event.preventDefault()
    var selectedMember = $(this).data('type')
    $('.project-info-container.' + selectedMember + '').addClass('slide-in')
    $('.close-project').addClass('is-visible')
    $('.work-container').addClass('slide-out overfllow-hidden')
  })

  /* ----------------------------------------------------------- */
  /*  ANIMATED HEADING
  /* ----------------------------------------------------------- */
  function showWord($word, $duration) {
        if($word.parents('.marko-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        } else if ($word.parents('.marko-headline').hasClass('clip')) {
      $word.parents('.marko-words-wrapper').animate({width: $word.width() + 10 }, revealDuration, function () {
                setTimeout(function () { hideWord($word) }, revealAnimationDelay);
            });
        }
    }
    $('.image-lists').owlCarousel({
      loop:true,
      dots:false,
      nav:true,
      items:1
  })
})(jQuery);