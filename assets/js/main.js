var loadinAnimation = gsap.timeline();
$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 20) {
      $(".custom_navbar").addClass("customScrollTop");
    } else {
      $(".custom_navbar").removeClass("customScrollTop");
    }
  });

  // services_cards_slider
  if ($(".services_cards_slider").length) {
    $(".services_cards_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      rtl: currentDir == "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // gallery_slider
  if ($(".gallery_slider").length) {
    $(".gallery_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      rtl: currentDir == "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // gallery2_slider
  if ($(".gallery2_slider").length) {
    $(".gallery2_slider").slick({
      slidesToShow: 2.5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // custom_header_slider
  if ($(".custom_header_slider").length) {
    $(".custom_header_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      dots: true,
      focusOnSelect: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      rtl: currentDir == "rtl" ? true : false,
      prevArrow: $(".custom_header .prev"),
      nextArrow: $(".custom_header .next"),
    });
  }

  $(".services_cards .nav-link").on("click", function () {
    setTimeout(function () {
      $(".services_cards_slider").slick("setPosition");
    }, 100); // Delay to allow the tab content to become visible
  });

  if ($(".motorcycle_details_slider").length) {
    $(".slider-single").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 400,
      cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    });

    $(".slider-nav")
      .on("init", function (event, slick) {
        $(".slider-nav .slick-slide.slick-current").addClass("is-active");
      })
      .slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      });

    $(".slider-single").on(
      "afterChange",
      function (event, slick, currentSlide) {
        $(".slider-nav").slick("slickGoTo", currentSlide);
        var currrentNavSlideElem =
          '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $(".slider-nav .slick-slide.is-active").removeClass("is-active");
        $(currrentNavSlideElem).addClass("is-active");
      }
    );

    $(".slider-nav").on("click", ".slick-slide", function (event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data("slick-index");

      $(".slider-single").slick("slickGoTo", goToSingleSlide);
    });
  }

  AOS.init();
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  var currentDir = $("a").css("direction");
  $(".splashscreen").addClass("splashscreen_none");
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "right-front" : "left-front",
    },
    theme: "light",
    counters: {
      add: true,
    },
  });
  $(".mm-navbar__title").text("القائمة");
});

$(window).on("load", function () {
  $("html").removeClass("splash-active");
  $(".splach").addClass("splashscreen-none");
});
