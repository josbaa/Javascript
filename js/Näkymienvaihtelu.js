$(document).ready(function() {
    $('#grid-view').click(function() {
        $('#image-container').removeClass('list-container').addClass('grid-container');
    });

    $('#list-view').click(function() {
        $('#image-container').removeClass('grid-container').addClass('list-container');
    });
});

