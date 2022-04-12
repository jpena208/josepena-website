/* Media Queries
-------------------------------------------------- */
// media query
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
function addAnimatedClass() {
  // Adds animated class to cards when mouse enters card
  $(".project").hover(
    function () {
      $(this).find(".card-img").addClass("img-animation");

      $(this).find(".circle").addClass("circle-animation");
      $(this).find(".circle").removeClass("visually-hidden");
      setTimeout(() => {
        $(this).find(".card-title").removeClass("visually-hidden");
      }, 500);
    },
    function () {
      $(this).find(".card-img").removeClass("img-animation");

      $(this).find(".circle").removeClass("circle-animation");
      setTimeout(() => {
        $(this).find(".circle").addClass("visually-hidden");
      }, 200);
    }
  );

  // Adds fade animation to icons when mouse enters icon container
  $(".icon-container").hover(
    function () {
      $(this).find(".icon-animate").addClass("fa-fade");
    },
    function () {
      $(this).find(".icon-animate").removeClass("fa-fade");
    }
  );
}

/* Call Functions
-------------------------------------------------- */
addAnimatedClass();
