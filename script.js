// Muhurtam: February 11, 2027, 11:00 AM Central Standard Time
const muhurtam = new Date("2027-02-11T11:00:00-06:00");

function updateCountdown() {
  const left = muhurtam - Date.now();
  if (left <= 0) {
    document.getElementById("countdown").hidden = true;
    return;
  }
  const mins = Math.floor(left / 60000);
  document.getElementById("cd-days").textContent = Math.floor(mins / 1440);
  document.getElementById("cd-hours").textContent = Math.floor(mins / 60) % 24;
  document.getElementById("cd-mins").textContent = mins % 60;
}
updateCountdown();
setInterval(updateCountdown, 30000);

if (RSVP_FORM_URL) {
  const button = document.getElementById("rsvp-button");
  button.href = RSVP_FORM_URL;
  button.hidden = false;
  document.getElementById("rsvp-note").textContent = "Please let us know if you can come.";
}
