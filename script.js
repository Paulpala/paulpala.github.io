// Mobile navigation menu toggle
function toggleMenu() {
    let links = document.getElementById("nav-links");
    links.style.display = links.style.display === "block" ? "none" : "block";
}

// Quote form dummy handler
function submitQuote(e) {
    e.preventDefault();
    alert("Thank you. Your quote request has been submitted.");
}

