let searchCount = 0; 

function updateCounter() {
    counter++;
    $('#counter').text(counter);
}

document.getElementById('getFactButton').addEventListener('click', async () => {
 
  searchCount++;
  updateSearchCounter();

  
  document.querySelector('.spinner-container').style.display = 'block';
  
  try {
    
    const response = await fetch('http://numbersapi.com/random/trivia');
    const data = await response.text();
    // Näytetään data sivulla
    document.getElementById('factContainer').innerHTML = data;
  } catch (error) {
    console.error(error);
    // Näytetään virheviesti
    document.getElementById('factContainer').innerHTML = 'Error fetching data';
  } finally {
    // Piilotetaan gif-animaatio, kun pyyntö on valmis
    document.querySelector('.spinner-container').style.display = 'none';
  }
});

// Päivittää laskurin näytön
function updateSearchCounter() {
  document.getElementById('counter').innerText = `Haut: ${searchCount}`;
}
