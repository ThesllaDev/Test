$(function () {
    var $ppc = $('.progress__bar'),
        percent = parseInt($ppc.data('percent')),
        deg = (360 * percent) / 100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.bar__progress--fill').css('transform', 'rotate(' + deg + 'deg)');
});