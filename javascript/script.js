// Get all the navigation links
var navLinks = document.querySelectorAll("nav ul li a");

// Add click event listeners to each link
navLinks.forEach(function(link) {
    link.addEventListener("mouseover", function(event) {
        myDiv.classList.add("highlight");
    });
});

// Add click event listeners to each link
navLinks.forEach(function(link) {
    link.addEventListener("mouseout", function(event) {
        myDiv.classList.remove("highlight");
    });
});
    
