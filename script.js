if (RSVP_FORM_URL) {
  const button = document.getElementById("rsvp-button");
  button.href = RSVP_FORM_URL;
  button.hidden = false;
  document.getElementById("rsvp-note").textContent = "Please let us know if you can come.";
}

// Switch between the traditional invitation (the main page) and the western look.
// Adding ?invite=western to the link opens the western one directly.
const themeSwitch = document.getElementById("theme-switch");

function showTraditional(on) {
  document.body.classList.toggle("traditional", on);
  themeSwitch.textContent = on ? "Western look" : "Traditional invite";
}

showTraditional(new URLSearchParams(location.search).get("invite") !== "western");
themeSwitch.addEventListener("click", () => {
  const on = !document.body.classList.contains("traditional");
  showTraditional(on);
  const url = new URL(location.href);
  if (on) url.searchParams.delete("invite");
  else url.searchParams.set("invite", "western");
  url.hash = "";
  history.replaceState(null, "", url);
  window.scrollTo({ top: 0, behavior: "instant" });
});

// Each invitation starts closed; tapping its cover swings it open.
document.querySelectorAll(".cover").forEach((cover) => {
  cover.addEventListener("click", () => cover.parentElement.classList.add("open"));
});
// Switching looks closes the cards again, so the opening can be seen each time.
themeSwitch.addEventListener("click", () => {
  document.querySelectorAll(".book").forEach((book) => book.classList.remove("open"));
});

// Countdown to the muhurtham: February 11, 2027, 11:00 AM Central Standard Time
const muhurtham = new Date("2027-02-11T11:00:00-06:00");

function updateCountdown() {
  const left = muhurtham - Date.now();
  if (left <= 0) {
    document.getElementById("countdown").hidden = true;
    return;
  }
  const secs = Math.floor(left / 1000);
  document.getElementById("cd-days").textContent = Math.floor(secs / 86400);
  document.getElementById("cd-hours").textContent = Math.floor(secs / 3600) % 24;
  document.getElementById("cd-mins").textContent = Math.floor(secs / 60) % 60;
  document.getElementById("cd-secs").textContent = secs % 60;
}
updateCountdown();
setInterval(updateCountdown, 1000);
