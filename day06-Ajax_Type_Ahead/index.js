const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(word, cities) {
  return cities.filter((place) => {
    const regExp = new RegExp(word, "gi");
    return place.city.match(regExp) || place.state.match(regExp);
  });
}

function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regExp = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regExp,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regExp,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${formatNumber(place.population)}</span>
      </li>
    `;
    })
    .join("");

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
