let address;

window.onload=function() {
    address = "Koulukatu 10";
    document.getElementById("addressField").value = address;
    

    console.log("Javascript tiedosto lisätty");
    //("javascript tiedosto lisätty");
}

function sayHello() {
    //alert("Hei");

    address = document.getElementById("addressField").value;
    console.log("osoite kentässä: " + address);
}

function search(){
    address = document.getElementById("addressField").value;
    city = document.getElementById("cityField").value;
    console.log("osoite kentässä: " + address);
    let frame = document.getElementById("map-frame");
    frame.src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
}