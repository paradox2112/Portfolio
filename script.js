
// Automatically update the footer year
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Welcome message
console.log("Welcome to Paradox's portfolio!");

// Smooth navigation
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        console.log("Navigating to: " + this.textContent);
    });
});

// Project card interaction
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function() {
        console.log("Selected: " + this.textContent.trim());
    });
});
