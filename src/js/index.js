// Adds animated class to icons on hover of paragraphs
$(".icon-container").hover(function(){
    // Adds fade animation to icons
    let icon = $(this).find(".icon-animate");
    $(icon).addClass("fa-fade");
});

// Removes animated class from icons on mouse exit
$(".icon-container").mouseleave(function(){

    // Remove fade animation from icons
    let icon = $(this).find(".icon-animate");
    $(icon).removeClass("fa-fade");
});