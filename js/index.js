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

/* Call Functions
-------------------------------------------------- */
addAnimatedClass();
