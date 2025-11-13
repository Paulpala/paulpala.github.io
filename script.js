function toggleMenu() {
    const links = document.getElementById("nav-links");
    if (!links) return;
    links.style.display = (links.style.display === "block") ? "none" : "block";
}
