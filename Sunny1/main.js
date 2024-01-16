document.addEventListener("DOMContentLoaded", function () {
    // Sample data for travel agencies and prices
    const agenciesData = [
        { name: "Agency A", price: 500 },
        { name: "Agency B", price: 550 },
        { name: "Agency C", price: 480 },
    ];

    // Populate the agencies section
    const agenciesSection = document.querySelector(".agencies");
    agenciesData.forEach((agency, index) => {
        const agencyDiv = document.createElement("div");
        agencyDiv.className = "agency";
        agencyDiv.innerHTML = `
            <select class="agencySelect">
                <option value="${agency.price}">${agency.name}</option>
            </select>
            <span class="agencyPrice">$${agency.price}</span>
        `;
        agenciesSection.appendChild(agencyDiv);
    });

    // Event listener for select elements
    const selects = document.querySelectorAll(".agencySelect");
    selects.forEach((select) => {
        select.addEventListener("change", updateResult);
    });

    // Function to update the best price result
    function updateResult() {
        let bestPrice = Infinity;
        selects.forEach((select) => {
            const price = parseFloat(select.value);
            if (price < bestPrice) {
                bestPrice = price;
            }
        });

        const bestPriceElement = document.querySelector(".bestPrice");
        bestPriceElement.textContent = `$${bestPrice}`;
    }
});
