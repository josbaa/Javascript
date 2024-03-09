let searchCount = 0;

function updateCounter() {
  counter++;
  $("#counter").text(counter);
}

document.getElementById("getFactButton").addEventListener("click", async () => {
  let data =
    '<div class="accordion-item">' +
    '<h2 class="accordion-header" id="flush-headingOne">' +
    '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">' +
    "Accordion Item" +
    searchCount +
    "</button>" +
    "</h2>" +
    '<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">' +
    '<div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.This is the first items accordion body' +
    "</div>" +
    "</div>" +
    "</div>";

  searchCount++;
  updateSearchCounter();

  document.querySelector(".spinner-container").style.display = "block";

  try {
    const response = await fetch("http://numbersapi.com/random/trivia");
    const data = await response.text();
    // Näytetään data sivulla
    document.getElementById("factContainer").innerHTML = data;
  } catch (error) {
    console.error(error);
    // Näytetään virheviesti
    document.getElementById("factContainer").innerHTML = "Error fetching data";
  } finally {
    // Piilotetaan gif-animaatio, kun pyyntö on valmis
    document.querySelector(".spinner-container").style.display = "none";
    document.getElementById("accordionFlushExample").innerHTML += data;
  }
});

// Päivittää laskurin näytön
function updateSearchCounter() {
  document.getElementById("counter").innerText = `Haut: ${searchCount}`;
}
