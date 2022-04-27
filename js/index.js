/* Media Queries
-------------------------------------------------- */
/**
 * @description: Media queries for responsiveness
 */
function mediaQuery() {
  var mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addEventListener(function (e) {
    if (e.matches) {
      // console.log('mobile');
    } else {
      // console.log('desktop');
    }
  });
}

/* Animations
-------------------------------------------------- */
/**
 * @description: Adds css classes to elements to trigger animations
 */
function addAnimatedClass() {
  // Adds animated class to cards when mouse enters card
  $(".project").hover(
    function () {
      $(this).find(".card-img").addClass("img-animation");

      $(this).find(".view-project-btn").addClass("view-project-btn-animation");
      $(this).find(".view-project-btn").removeClass("visually-hidden");
    },
    function () {
      $(this).find(".card-img").removeClass("img-animation");

      $(this)
        .find(".view-project-btn")
        .removeClass("view-project-btn-animation");
      setTimeout(() => {
        $(this).find(".view-project-btn").addClass("visually-hidden");
      }, 200);
    }
  );

  // Adds fade animation to icons when mouse enters icon container
  $(".icon-container").hover(
    function () {
      $(this).find(".icon-animate").addClass("fa-beat-fade");
    },
    function () {
      $(this).find(".icon-animate").removeClass("fa-beat-fade");
    }
  );
}

/**
 * @description: Adds Anime JS animation for nav button icon
 */
function navBtnAnime() {
  var navBtnAnime = anime.timeline({
    autoplay: false,
  });

  navBtnAnime
    .add(
      {
        targets: ".nav-btn-top",
        translateY: [0, 8],
        rotate: [0, 45],
        easing: "easeInOutBack",
        duration: 600,
      },
      0
    )
    .add(
      {
        targets: ".nav-btn-mid",
        opacity: [1, 0],
        duration: 170,
        easing: "linear",
      },
      "-=600"
    )
    .add(
      {
        targets: ".nav-btn-bottom",
        translateY: [0, -8],
        rotate: [0, -45],
        easing: "easeInOutBack",
        duration: 600,
      },
      0
    );

  document.querySelector(".navbar-toggler").onclick = function () {
    navBtnAnime.finished.then(() => {
      navBtnAnime.reverse();
    });
    navBtnAnime.play();
  };
}

/**
 * @description: Adds Anime JS animation for about page on it's own timeline
 */
function addAboutAnime() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector(".about-t1-2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  var textWrapper = document.querySelector(".about-t1-3");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  var textWrapper = document.querySelector(".about-t1-4");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime
    .timeline()
    .add({
      targets: ".about-t1-1 .word",
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 600,
      delay: (el, i) => 800 * i,
    })
    .add({
      targets: ".about-t1-2 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: ".about-t1-3 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 70 * i,
    })
    .add(
      {
        targets: ".about-t1-4 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 500,
        delay: (el, i) => 70 * i,
      },
      "-=400"
    )
    .add({
      targets: ".about-t1-5",
      opacity: [0, 1],
      duration: 500,
      easing: "linear",
    })
    .add({
      targets: ".about-t1-6",
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1700,
      easing: "easeOutBounce",
      delay: 100,
    });
}

/* Call Functions
-------------------------------------------------- */
addAnimatedClass();
addAboutAnime();
navBtnAnime();
