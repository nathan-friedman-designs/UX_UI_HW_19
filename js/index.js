//for Work section
$(".tab").on("click",function() {
    if ($(this).hasClass("tab1")) {
        $(".tab1").addClass("selected");
        $(".tab2").removeClass("selected");
        $(".tab3").removeClass("selected");
        $(".tab4").removeClass("selected");
        $("#proj1").css("display","grid");
        $("#proj2").css("display","none");
        $("#proj3").css("display","none");
        $("#proj4").css("display","none");

    }
    else if ($(this).hasClass("tab2")) {
        $(".tab1").removeClass("selected");
        $(".tab2").addClass("selected");
        $(".tab3").removeClass("selected");
        $(".tab4").removeClass("selected");
        $("#proj1").css("display","none");
        $("#proj2").css("display","grid");
        $("#proj3").css("display","none");
        $("#proj4").css("display","none");
    }
    else if ($(this).hasClass("tab3")) {
        $(".tab1").removeClass("selected");
        $(".tab2").removeClass("selected");
        $(".tab3").addClass("selected");
        $(".tab4").removeClass("selected");
        $("#proj1").css("display","none");
        $("#proj2").css("display","none");
        $("#proj3").css("display","grid");
        $("#proj4").css("display","none");
    }
    else if($(this).hasClass("tab4")) {
        $(".tab1").removeClass("selected");
        $(".tab2").removeClass("selected");
        $(".tab3").removeClass("selected");
        $(".tab4").addClass("selected");
        $("#proj1").css("display","none");
        $("#proj2").css("display","none");
        $("#proj3").css("display","none");
        $("#proj4").css("display","grid");
    }
});
//for Skills section
$(".graphDes").on("click", function(){
    $("#dropGD").slideToggle();
  });
$(".res").on("click", function(){
    $("#dropRes").slideToggle();
});
$(".uiDes").on("click", function(){
    $("#dropUIDes").slideToggle();
});
$(".soft").on("click", function(){
    $("#dropSoft").slideToggle();
});
//for Loading Screen
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3500);