// PROGRESS BAR
$(function () {
    var $ppc = $('.progress__bar'),
        percent = parseInt($ppc.data('percent')),
        deg = (360 * percent) / 100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.bar__progress--fill').css('transform', 'rotate(' + deg + 'deg)');
});

// SIDE BAR
const sideBar = document.querySelector('.lateral__menu');
const btnOpenSideBar = document.querySelector('.btn__open__side__menu');
btnOpenSideBar.style.display = "none";

function openSideBar() {
    sideBar.style.display = "block";
    btnOpenSideBar.style.display = "none";
}

function closeSideBar() {
    sideBar.style.display = "none";
    btnOpenSideBar.style.display = "block";
}

// DRAG AND DROP CARD'S

const cards = document.querySelectorAll('.cards');
const taskLists = document.querySelectorAll('.list__cards');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('dragend', dragend);
})

function dragstart() {
    this.classList.add('is-dragging');
}

function dragend() {
    this.classList.remove('is-dragging');
}

taskLists.forEach(taskList => {
    taskList.addEventListener('dragover', dragover);
})

function dragover() {
    const cardBeingDragged = document.querySelector('.is-dragging');
    this.insertAdjacentElement('afterbegin', cardBeingDragged);
}