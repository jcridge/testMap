$(document).ready(function () {
    changeSize();
});

function changeSize() {
    var bodyheight = $(window).height();
    $("#map-canvas").height(bodyheight - 60);
    $(window).resize(function () {
        var bodyheight = $(window).height();
        $("#map-canvas").height(bodyheight - 60);
    });
}


