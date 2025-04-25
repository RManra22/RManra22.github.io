function darkmode() {
    const root = document.documentElement;
    const icon = document.getElementById("mode-icon");

    root.classList.toggle("darkmode");

    if (root.classList.contains("darkmode")) {
        icon.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "🌞";
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () {
    const theme = localStorage.getItem("theme");
    const icon = document.getElementById("mode-icon");

    if (theme === "dark") {
        document.documentElement.classList.add("darkmode");
        if (icon) icon.textContent = "🌙";
    } else {
        if (icon) icon.textContent = "🌞";
    }
};


function toggleMenu() {
    const links = document.getElementById("nav-links");
    links.classList.toggle("open");
}