


// datumet vi räknar ifrån
var countDownDate = new Date("June 8, 2021 11:00:00").getTime();

// Uppdatera varje 1 sekund
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Tiden mellan idag och det angivna datumet
  var distance = countDownDate - now;

  // Räkning för dag, timmar, minuter och sekundrar
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Element id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // När nedräkning är klar kommer text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "SOMMARLOV!";
  }
}, 1000);
