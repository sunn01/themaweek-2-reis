const destinationButton = document.querySelector('.destination-btn');
const departureButton = document.querySelector('.departure-btn');
const arrivalButton = document.querySelector('.arrival-btn');
const searchButton = document.querySelector('.search-btn');

document.addEventListener("DOMContentLoaded", function () {
    // Sample data for the dropdown menu
    const destinations = ["Paris", "New York", "Tokyo", "London", "Sydney"];

    // Populate the dropdown content
    const dropdownContent = document.querySelector(".dropdown-content");
    destinations.forEach((destination) => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = destination;
        dropdownContent.appendChild(link);
    });
});