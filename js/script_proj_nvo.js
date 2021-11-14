console.log("Linked!");

$(".hamburger").on("click", function(){
    $(".mobNav").slideToggle();
});
$(".mobA").on("click", function(){
    $(".mobNav").slideToggle();
});

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3500);