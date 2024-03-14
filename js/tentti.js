

function laskeSumma() {
  var pizzaHinta = parseFloat(
    document
      .getElementById("pizza")
      .selectedOptions[0].getAttribute("data-hinta")
  );
  var extraHinta = parseFloat(document.getElementById("extrat").value);
  var alennus = document.getElementById("kantaAsiakas").checked ? 0.1 : 0;
  var summa = (pizzaHinta + extraHinta) * (1 - alennus);
  document.getElementById("summa").textContent = summa.toFixed(2);
}


   function lisaaExtra(hinta) {
    extratSumma += hinta;
    laskeSumma();
  }

$("#tilaaBtn").click(function () {
  $("#pizza").val(0);
  $("#extrat").val(0);
  $("#kantaAsiakas").prop("checked", false);
  laskeSumma();
});


laskeSumma();
