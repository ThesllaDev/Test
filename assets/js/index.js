$(function () {
    var $ppc = $('.progress__bar'),
        percent = parseInt($ppc.data('percent')),
        deg = (360 * percent) / 100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.bar__progress--fill').css('transform', 'rotate(' + deg + 'deg)');
});

const sideBar = document.querySelector('.lateral__menu');
const btnOpenSideBar = document.querySelector('.btn__open__side__menu');
btnOpenSideBar.style.display = "none"

function openSideBar() {
    sideBar.style.display = "block";
    btnOpenSideBar.style.display = "none";
}

function closeSideBar() {
    sideBar.style.display = "none";
    btnOpenSideBar.style.display = "block";
}