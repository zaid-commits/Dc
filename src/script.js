document.addEventListener("DOMContentLoaded", (event) => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(currentTheme + "-theme");

  themeToggleButton.textContent = currentTheme === "light" ? "🌙" : "☀️";

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const newTheme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
    themeToggleButton.textContent = newTheme === "light" ? "🌙" : "☀️";
    localStorage.setItem("theme", newTheme);
  });
});

// Search functionality
const searchInput = document.getElementById("search");
const memberCards = document.querySelectorAll(".member-card");

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  memberCards.forEach((card) => {
    const content = card.textContent.toLowerCase();
    if (content.includes(searchTerm)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
