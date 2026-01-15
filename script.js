// ===============================
// Prodesk IT - Main JavaScript
// ===============================

// Dark Mode Toggle (Tailwind CSS)
const themeToggleButton = document.getElementById("theme-toggle");

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}
