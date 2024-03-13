function search() {
    var address = document.getElementById("addressField").value;
    var city = document.getElementById("cityField").value;
    var fullAddress = address + ", " + city;
  
    var iframe = document.getElementById("map-frame");
    iframe.src = "https://www.google.com/maps?q=" + encodeURIComponent(fullAddress) + "&output=embed";
  }
  