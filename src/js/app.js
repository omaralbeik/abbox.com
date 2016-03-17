$('.welcome-section h1').html(data.message);
$('.action-section h1').html(data.attract.title);
$('.action-section p').html(data.attract.message);

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

$.each(data.customers, function(index, customer) {
  var item = $('<li class="item">');
  var img = $('<img class="img-responsive hvr-grow" src="' + customer.logo_url + '" alt="' + customer.name + '" />');
  var name = $('<h4>' + customer.name + '</h4>');
  item.append(img);
  item.append(name);
  $('.customers').append(item);
});

$.each(data.partners, function(index, partner) {
  var item = $('<li class="item">');
  var img = $('<img class="img-responsive hvr-grow" src="' + partner.logo_url + '" alt="' + partner.name + '" />');
  var name = $('<h4>' + partner.name + '</h4>');
  item.append(img);
  item.append(name);
  $('.partners').append(item);
});

$.each(data.team, function(index, member) {

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

    $('.customers-section .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
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
          items: 6
        }
      }
    });

    $('.team-section .owl-carousel').owlCarousel({
      margin: 10,
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
