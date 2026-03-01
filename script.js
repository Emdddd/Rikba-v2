/* ===============================
   THEME TOGGLE (LIGHT / DARK)
================================ /

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


/ ===============================
   WAITLIST FORM SUBMIT
================================ */

const form = document.getElementById("form");
const successMessage = document.getElementById("success");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  await fetch("https://formspree.io/f/mgolqzww", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  form.reset();
  successMessage.classList.remove("hidden");
});
