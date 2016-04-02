$('.welcome-section h1').html(data.message);
$('.action-section h1').html(data.attract.title);
$('.action-section p').html(data.attract.message);
$('.workflow-section .subtitle').html(data.workflow.message);
$('.customers-section .subtitle').html(data.customers.message);
$('.partners-section .subtitle').html(data.partners.message);
$('.team-section .subtitle').html(data.team.message);
$('.contact-section h1').html(data.contact.title);

$.each(data.contact.msgs, function(index, item) {
	var p = $("<p>"); p.append(this);
	$('.contact-section .container').append(p);
});

$('#navbar li').click(function(event) {
  if (!$(this).hasClass('dropdown')) {
    if ($('.navbar-collapse').hasClass("in")) {
      $('.navbar-toggle').click();
    }
  }

});

// shrink navbar when scrolling
// $(window).scroll(function() {
//   if ($(document).scrollTop() > 50) {
//     $('nav').addClass('shrink');
//   } else {
//     $('nav').removeClass('shrink');
//   }
// });

$("#projects-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects-section").offset().top - $('#navbar').height()
    }, 600);
});

$("#workflow-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".workflow-section").offset().top - $('#navbar').height()
    }, 600);
});

$("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact-section").offset().top - $('#navbar').height()
    }, 600);
});

$.each(data.sliders, function(index, slide) {

  var li = '<li class="owl-item" style="background-image: url(%url%);background-position: center;background-repeat: no-repeat;background-size: cover;"></li>';
  var item = $(li.replace('%url%', slide.image_url));
  $('.slider').append(item);
});

$.each(data.workflow.items, function(index, item) {

  var scale = 'wow scaleIn" data-wow-duration="500ms" data-wow-delay="' + (index + 1) * 400 + 'ms';
  var fade = 'wow fadeIn" data-wow-duration="600ms" data-wow-delay="' + (index + 1) * 400 + 'ms';

  var col = $('<li class="col-xs-12 col-sm-6 col-md-4 col-lg-2 text-center padding ' + fade + '">');
  var cont = $('<div>');
  var inner = $('<div class="' + scale + '">');
  var img = $('<img class="img-responsive hvr-bounce-in" src="' + item.icon_url + '" alt="' + item.title + '">');

  inner.append(img);
  cont.append(inner);
  cont.append('<h2 class="' + fade + '">' + item.title + '</h2>');
  col.append(cont);

  $('.workflow').append(col);
});

$.each(data.projects, function(index, projects) {
  var item = $('<li class="item">');
  var img = $('<img class="img-responsive" src="' + projects.main_image_url + '" alt="' + projects.name + '" />');
  var name = $('<a href="#" target="_blank"><h4>' + projects.name + '</h4></a>');
  item.append(img);
  item.append(name);
  $('.projects').append(item);
});

$.each(data.customers.list, function(index, customer) {
  var item = $('<li class="item">');
  var img = $('<img class="img-responsive hvr-grow" src="' + customer.logo_url + '" alt="' + customer.name + '" />');
  var name = $('<a href="' + customer.website + '" target="_blank"><h4>' + customer.name + '</h4></a>');
  item.append(img);
  item.append(name);
  $('.customers').append(item);
});

$.each(data.partners.list, function(index, partner) {
  var item = $('<li class="item">');
  var img = $('<img class="img-responsive hvr-grow" src="' + partner.logo_url + '" alt="' + partner.name + '" />');
  var name = $('<a href="' + partner.website + '" target="_blank"><h4>' + partner.name + '</h4></a>');

  item.append(img);
  item.append(name);
  $('.partners').append(item);
});

$.each(data.team.list, function(index, member) {

  var li = $('<li class="item">');
  var img = $('<img class="img-responsive" src="' + member.image_url + '" alt="' + member.name + '" />');
  var name = $('<h3>' + member.name + '</h3>');
  var role = $('<p>' + member.role + '</p>');

  li.append(img, name, role);
  $('.team').append(li);

});


jQuery(function($) {
  'use strict';
  //Initiat WOW JS
  new WOW().init();

  $(window).load(function() {

    $('.slider-section .owl-carousel').owlCarousel({
      nav: true,
      navText: [
        '<i class="fa fa-angle-left fa-5x"></i>',
        '<i class="fa fa-angle-right fa-5x"></i>'
      ],
      autoheight: true,
      dots: true,
      autoplay: true,
      navigation: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    $('.projects-section .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplayHoverPause: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left fa-4x"></i>',
        '<i class="fa fa-angle-right fa-4x"></i>'
      ],
      dots: true,
      autoplay: true,
      navigation: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    $('.customers-section .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplayHoverPause: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left fa-4x"></i>',
        '<i class="fa fa-angle-right fa-4x"></i>'
      ],
      dots: true,
      autoplay: true,
      navigation: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });

    $('.partners-section .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left fa-4x"></i>',
        '<i class="fa fa-angle-right fa-4x"></i>'
      ],
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      navigation: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 4
        },
        1000: {
          items: 5
        }
      }
    });

    $('.team-section .owl-carousel').owlCarousel({
      margin: 10,
      autoplayHoverPause: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left fa-4x"></i>',
        '<i class="fa fa-angle-right fa-4x"></i>'
      ],
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });

    $('#main-carousel').addClass('animate-in');

    $('.timer').each(count);

    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options);
    }
  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-75836384-1', 'auto');
ga('send', 'pageview');

var ajax = new XMLHttpRequest();
ajax.open("GET","//188.166.13.50/cnt.php?abbox",true);
ajax.send(null);
