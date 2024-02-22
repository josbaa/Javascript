document.addEventListener("DOMContentLoaded", function() {
    // JSON-taulukko mediaelementin sisällöstä
    var contentData = [
        {
            "image": "path/to/image1.jpg",
            "text": "Text for image 1"
        },
        {
            "image": "path/to/image2.jpg",
            "text": "Text for image 2"
        },
        // Lisää tarvittaessa lisää objekteja
    ];

    // Alusta mediaelementti ensimmäisellä objektilla
    showContent(0);

    // Funktio näyttää mediaelementin sisällön tietyllä indeksillä
    function showContent(index) {
        var mediaElement = document.getElementById("mediaElement");
        var imageElement = document.getElementById("image");
        var textElement = document.getElementById("text");

        // Näytä kuvaa ja tekstiä
        imageElement.src = contentData[index].image;
        textElement.textContent = contentData[index].text;

        // Tallenna tila local storageen
        localStorage.setItem("lastShownIndex", index);
    }

    // Lisää tapahtumankäsittelijä Next-painikkeelle
    document.getElementById("NextButton").addEventListener("click", function() {
        var currentIndex = parseInt(localStorage.getItem("lastShownIndex"));
        var nextIndex = (currentIndex + 1) % contentData.length;
        showContent(nextIndex);
    });

    // Lisää tapahtumankäsittelijä Previous-painikkeelle
    document.getElementById("PreviousButton").addEventListener("click", function() {
        var currentIndex = parseInt(localStorage.getItem("lastShownIndex"));
        var previousIndex = (currentIndex - 1 + contentData.length) % contentData.length;
        showContent(previousIndex);
    });
});

button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
// JavaScript-tiedosto

var contentData = {
    "image": "kuva.jpg", // Kuvan URL-osoite
    "text": "Kuvaesimerkki"
  };
  
  // Kuvan lisääminen HTML-sivulle
  var imgElement = document.createElement("img");
  imgElement.src = contentData.image;
  imgElement.alt = contentData.text;
  document.body.appendChild(imgElement); // Lisätään kuva body-elementtiin
  
