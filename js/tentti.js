
  function laskeSumma() {
    var pizzaHinta = parseFloat(document.getElementById("pizza").selectedOptions[0].getAttribute("data-hinta"));
    var extraHinta = parseFloat(document.getElementById("extrat").value);
    var alennus = document.getElementById("kantaAsiakas").checked ? 0.1 : 0;
    var summa = (pizzaHinta + extraHinta) * (1 - alennus);
    document.getElementById("summa").textContent = summa.toFixed(2);
  }

  function nollaaTilaus() {
    document.getElementById("pizza").selectedIndex = 0;
    document.getElementById("extrat").value = 0;
    document.getElementById("kantaAsiakas").checked = false;
    laskeSumma();
  }
