$(document).ready(function () {
    $('#scroll').hide()
    $('#imgpad').show()
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        limit = $('.hdd').scrollTop();
        if (scroll > (limit + 150)) {
            $("#scroll").show();
        } else {
            $('#scroll').hide();
        }
    });
    $('#page').hide()

    /* if ($(window).width() < 576 && $(window).load()) {
        $("#imgpad").hide();
    }

    if ($(window).load()) {
        if ($(window).width() < 576) {
            $("#imgpad").hide();
        }
    } */
});
