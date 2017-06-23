$(document).ready(function() {
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var headScrollTop = 0;
  $(window).scroll(function() {
    var navScrollTop = $(this).scrollTop();
    if (navScrollTop - headScrollTop > 50) {
      var navBarHeight = $('.navbar').css('height');
      headScrollTop = navScrollTop;
      $('.navbar').animate({
        top: '-' + navBarHeight
      }, 150);
    } else if (headScrollTop - navScrollTop > 50) {
      $('.navbar').animate({
        top: '0px'
      }, 150);
      headScrollTop = navScrollTop;
    }
  });
});


// // Create a variable to store how far the user has scrolled and set it equal to 0
// var headScrollTop = 0;
// $(window).scroll(function() {
//     //Create a variable that stores the value of the .scrollTop() property of this
//     var navScrollTop = $(this).scrollTop();
//     //If navScrollTop is greater than headScrollTop by 50 or more, create a variable that stores the height of the navbar
//     if (navScrollTop - headScrollTop > 50) {
//       //Accesses the element's style property like JS would in var height = someDOMelement.style.height;
//       var navBarHeight = $('.navbar').css('height');
//       //Record of how far the user scrolled last time they finished scrolling
//       //You need this record to compare in your control flow.
//       headScrollTop = navScrollTop;
//       //Use the jQuery .animate() function to to change the top offset of the navbar to be the negative height of the navbar over 150ms
//       $('.navbar').animate({top: '-' + navBarHeight}, 150);
//     } else if (headScrollTop - navScrollTop > 50) {
//       $('.navbar').animate({top: '0px'}, 150);
//       //Record of how far the user scrolled last time they finished scrolling
//       //You need this record to compare in your control flow.
//       headScrollTop = navScrollTop;
//     }
//   });
