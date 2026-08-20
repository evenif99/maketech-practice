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

    initHeroSwiper();
    initSolutionSwipers();
    initLucide();
});

$(window).on("load", function () {
    initAboutAnimation();
    initProcessAnimation();
    initSolutionOverviewAnimation();
    initFollowupAnimation();
    initClientsAnimation();
    initCounter();

    ScrollTrigger.refresh();
});
