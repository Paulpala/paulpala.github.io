function toggleMenu() {
    let links = document.getElementById("nav-links");
    links.style.display = links.style.display === "block" ? "none" : "block";
}

function submitQuote(e) {
    e.preventDefault();
    alert("Your quote request has been submitted.");
}
