document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");

    // check if there is already a mode
    const savedTheme = localStorage.getItem("theme") || "dark mode";
    html.setAttribute("theme", savedTheme);
    themeToggle.innerText = savedTheme === "dark mode" ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Toggle-Funktion
    themeToggle.addEventListener("click", () => {
        const newTheme = html.getAttribute("theme") === "light mode" ? "dark mode" : "light mode";
        html.setAttribute("theme", newTheme);
        localStorage.setItem("theme", newTheme);
        themeToggle.innerText = newTheme === "dark mode" ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});