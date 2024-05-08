(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());

// Target date and time
const targetDate = new Date("December 8, 2023 14:00:00").getTime();

// Update the counter every second
const interval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the difference between the current date and the target date
  const difference = now - targetDate;

  // Calculate years, days, hours, minutes, and seconds
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the counter
  document.getElementById("counter").innerHTML = ` ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

}, 1000);

 // Get the audio element
var audio = document.getElementById("myAudio");

  // Play the audio when the page loads
window.onload = function() {
  audio.play();
};
