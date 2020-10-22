import $ from "jquery";

$(document).ready(function() {
    $(".list-item:first").hover(function() {
        $(this).toggleClass("active");
    });

    $(".list-item:eq(2)").on("click", function() {
        $(".image:even").fadeToggle();
    });

    $(".list-item:eq(4)").on("click", function() {
        $(".image:odd").animate({
                opacity: "toggle",
                height: "toggle",
            },
            2000
        );
    });

    $(".list-item:eq(1)").on("click", function() {
        $(".list-item:eq(3)").toggleClass("bgc");
        $(this).toggleClass("bgc");
    });
});