// Fetch countries population from the API
const apiUrl = 'https://restcountries.com/v3.1/all';
const countryList = document.getElementById('country-list');

// Display an alert when the page loads
window.onload = function () {
  alert('⚠️ Check your country population here!');
};

// Fetch and display countries' population
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const countries = data.map(country => ({
      name: country.name.common,
      population: country.population
    }));

    // Sort countries by population in descending order
    countries.sort((a, b) => b.population - a.population);

    // Render each country as a list item with a badge
    countries.forEach(country => {
      const countryItem = document.createElement('li');
      countryItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

      countryItem.innerHTML = `
        <span class="namii">${country.name}</span>
        <span class="badge">
          ${country.population.toLocaleString()}
        </span>
      `;

      countryList.appendChild(countryItem);
    });
  })
  .catch(error => {
    console.error('Error fetching country data:', error);
  });
