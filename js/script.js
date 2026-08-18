function initLucide() {
    if (typeof lucide !== "undefined") {
        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5,
            },
        });
    }
}

$(document).ready(function () {
    $("#header").load("/components/header.html", function () {
        initLucide();
        initLanguageSelector();
    });

    $("#floating-buttons").load("/components/floating-buttons.html", function () {
        initLucide();
        initTopButton();
        initFloatingMenu();
    });

    $("#footer").load("/components/footer.html", initLucide);
    $("#pagination").load("/components/pagination.html", initLucide);
    $("#top_menu").load("/components/top_menu.html", initLucide);
    $("#pop_up").load("/components/pop_up.html", initLucide);

    initSolutionSwipers();
    initLucide();
});

$(window).on("load", function () {
    initAboutAnimation();
    initProcessAnimation();
    initCounter();

    ScrollTrigger.refresh();
});
