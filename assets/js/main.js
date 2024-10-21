var loadinAnimation = gsap.timeline();
$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".home_project_slider").length) {
    $(".home_project_slider").slick({
      slidesToShow: 3,
      arrows: false,
      dots: true,
      slidesToScroll: 1,
      infinite: false,
      rtl: currentDir === "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".services_cards_slider").length) {
    $(".services_cards_slider").slick({
      slidesToShow: 4,
      arrows: false,
      dots: true,
      slidesToScroll: 1,
      infinite: false,
      rtl: currentDir === "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".buy_basket").length) {
    $(".input-number-increment").on("click", function () {
      let inVal = $(this).parent().find(".numinput").val();
      console.log(inVal);
      inVal = parseInt(inVal);
      inVal += 1;
      $(this).parent().find(".numinput").val(inVal);
    });

    $(".input-number-decrement").on("click", function () {
      let inVal = $(this).parent().find(".numinput").val();
      console.log(inVal);
      inVal = parseInt(inVal);
      inVal -= 1;
      if (inVal <= 0) {
        inVal = 0;
      }
      $(this).parent().find(".numinput").val(inVal);
    });
  }

  if ($(".project_gallery_slider").length) {
    $(".slider_big").slick({
      // slidesToShow: 3,
      // slidesToScroll: 1,
      infinite: false,
      asNavFor: ".slider_nav",
      arrows: false,
      // rtl: currentDir === "rtl" ? true : false,
    });

    $(".slider_nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      asNavFor: ".slider_big",
      focusOnSelect: true,
      arrows: true,
      // rtl: currentDir === "rtl" ? true : false,
    });
  }

  if ($(".header_slider").length) {
    $(".header_slider").slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      focusOnSelect: false,
      pauseOnHover:false,
      infinite: false,
    });
  }

  if ($(".anim_sec_header").length) {
    $(".anim_sec_header").map((index, item) => {
      let itemNim = $(item);
      let ItemOverTitle = $(itemNim).find(".overlay_title")
      let headerTitle = gsap.timeline({
        scrollTrigger: {
          trigger: itemNim,
          start: "top 80%", // Adjust this value as needed
          end: "bottom 20%", // Adjust this value as needed
          toggleActions: "play none none none" // Play the animation when the element enters the viewport
        }
      });
      headerTitle.to(ItemOverTitle, { width: 0, duration: 1, ease: "linear" })
    })
  }

  loadinAnimation
    .to(".splach .splach_behind", { x: "100%", duration: 1.2, ease: "expo.inOut" })
    .to(".splach", { right: "-100%", duration: 1.2 ,ease: "expo.inOut" });

    loadinAnimation.pause();

  AOS.init();
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  var currentDir = $("a").css("direction");
  setTimeout(()=>{
    loadinAnimation.play();
  }, 500)
  
  // $(".splashscreen").addClass("splashscreen_none");
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

// $(window).on("load", function () {
//   $("html").removeClass("splash-active");
//   $(".splach").addClass("splashscreen-none");
// });
