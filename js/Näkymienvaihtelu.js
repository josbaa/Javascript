$(document).ready(function () {
    var mediaContent = [
        { "name": "Sudenkorento", "url": "https://suljin.fi/_astro/sudenkorento-70-jpg-kompressointi.a290ee31_254KKV.jpg" },
        { "name": "Joulu", "url": "https://peda.net/p/Anna%20Warsell/kuvia/joulu-jpg:file/photo/e3f60c0108726d59c5461deec7825673a942eb56/joulu.jpg" },
        { "name": "Aku", "url": "https://www.demotus.com/wp-content/uploads/2018/12/kfrmt1_aku.jpg" },
        { "name": "JPG", "url": "https://www.aiseesoft.com/images/how-to/convert-images-to-jpg/convert-images-to-jpg.jpg" }
    ];

    function addMedia(mediaContent) {
        var mediaContainer = $('#media-container');
        mediaContainer.empty();

        mediaContent.forEach(function (media) {
            var mediaElement = $('<img>').addClass('media-item').attr('src', media.url);
            mediaContainer.append(mediaElement);
        });
    }

    addMedia(mediaContent);
});

function toggleListView() {
    $('#media-container').removeClass('grid-container').addClass('list-container');
    $('.media-item').css({ 'width': '50%', 'height': 'auto' });
}

function toggleGridView() {
    $('#media-container').removeClass('list-container').addClass('grid-container');
    $('.media-item').css({ 'width': '', 'height': '' });
}
