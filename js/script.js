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
    $("#header").load("/components/header.html", initLucide);
    $("#footer").load("/components/footer.html", initLucide);
    $("#pagination").load("/components/pagination.html", initLucide);
    $("#top_menu").load("/components/top_menu.html", initLucide);
    $("#pop_up").load("/components/pop_up.html", initLucide);

    initLucide();
});
