

var currentIndex = 0;
var intervalId;


let mediaContent = [{ "name": "Mentula", "url": "https://suljin.fi/_astro/sudenkorento-70-jpg-kompressointi.a290ee31_254KKV.jpg" }, { "name": "Mentula", "url": "https://peda.net/p/Anna%20Warsell/kuvia/joulu-jpg:file/photo/e3f60c0108726d59c5461deec7825673a942eb56/joulu.jpg" },
{ "name": "Mentula", "url": "https://www.demotus.com/wp-content/uploads/2018/12/kfrmt1_aku.jpg" }, { "name": "Mentula", "url": "https://www.aiseesoft.com/images/how-to/convert-images-to-jpg/convert-images-to-jpg.jpg" }];



//Funktio näyttää mediasisällön
function showMedia(index) {
    console.log("index " + index);

    var mediaUrl = mediaContent[index].url;
    $('#media-element').attr('src', mediaUrl);
    localStorage.setItem('lastMediaIndex', index);
}

$(document).ready(function () {


    // Lataa viimeksi näytetty mediasisältö
    var lastMediaIndex = localStorage.getItem('lastMediaIndex');
    if (lastMediaIndex !== null) {
        currentIndex = parseInt(lastMediaIndex);
    }
    showMedia(currentIndex);
});

// Previous-painike
$('#previous-btn').click(function () {
    currentIndex = (currentIndex - 1 + mediaContent.length) % mediaContent.length;
    showMedia(currentIndex);
});

// Next-painike
$('#next-btn').click(function () {
    currentIndex = (currentIndex + 1) % mediaContent.length;
    showMedia(currentIndex);
});

// Play-painike
$('#play-btn').click(function () {
    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
        $(this).text('Play');
    } else {
        intervalId = setInterval(function () {
            currentIndex = (currentIndex + 1) % mediaContent.length;
            showMedia(currentIndex);
        }, 2000); // Vaihda kuva joka 2 sekunti
        $(this).text('Pause');
    }
});





