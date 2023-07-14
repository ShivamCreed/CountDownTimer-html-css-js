var countdownTimer;

function startCountdown() {
  // Get the user-selected date and time
  var dateInput = document.getElementById("date").value;
  var timeInput = document.getElementById("time").value;

  // Combine the date and time into a single string in the format "YYYY-MM-DD HH:MM"
  var countdownDateTime = dateInput + " " + timeInput;

  // Set the date and time to countdown
  var countdownDate = new Date(countdownDateTime).getTime();

  // Clear any previously running countdown timer
  clearInterval(countdownTimer);

  // Update the countdown every second
  countdownTimer = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    var distance = countdownDate - now;

    // Calculate the days, hours, minutes, and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is finished, display a message
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}