$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home__image path');
    var counterUp = $('.counter__up');
    var counterDown = $('.counter__down');
    var modal = $('.modal');
    var modalCloseButton = $('.modal__close-button');
    var viewFlatsButton = $('.view__flats');
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current__floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });
    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current__floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current__floor');
        }
    });
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current__floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current__floor');
        }
    });
    function toggleModal() {
        modal.toggleClass('is__open');
    }
});