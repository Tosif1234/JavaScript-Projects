const globalAPI = "https://disease.sh/v3/covid-19/all";
const countryAPI = "https://disease.sh/v3/covid-19/countries";

const globalSummary = document.getElementById("globalSummary");
const countryData = document.getElementById("countryData");
const lastUpdated = document.getElementById("lastUpdated");

function showLoader(target, message = "Loading data...") {
  target.innerHTML = `
                <div class="loader-container">
                <div class="loader"></div>
                <p class="mt-3 text-secondary fw-2">${message}</p>
                </div>
            `;
}

function showError(target, message) {
  target.innerHTML = `
                <div class="error-message">
                <i class="bi bi-exclamation-triangle-fill text-danger fs-4"></i>
                <p>${message}</p>
                </div>
            `;
}

async function loadGlobalSummary() {
  try {
    showLoader(globalSummary, "Fetching global data...");
    const res = await fetch(globalAPI);
    if (!res.ok) {
      throw new Error("Failed to fetch Global Data...");
    }
    const data = await res.json();

    const updated = new Date(data.updated).toLocaleString();
    lastUpdated.textContent = `Global Data Last Updated: ${updated}`;

    const cardHTML = `
            <div class="row">
                        <div class="col-lg-3 col-md-6"><div class="stat-card bg-cases">
                            <h5>Total Cases <i class="fas fa-chart-line"></i></h5><p>${data.cases.toLocaleString()}</p>
                            <span class="stat-today">${data.todayCases.toLocaleString()} today</span>
                        </div></div>
                        
                        <div class="col-lg-3 col-md-6"><div class="stat-card bg-deaths">
                            <h5>Total Deaths <i class="fas fa-skull-crossbones"></i></h5><p>${data.deaths.toLocaleString()}</p>
                            <span class="stat-today">${data.todayDeaths.toLocaleString()} today</span>
                        </div></div>
                        
                        <div class="col-lg-3 col-md-6"><div class="stat-card bg-recovered">
                            <h5>Total Recovered <i class="fas fa-check-circle"></i></h5><p>${data.recovered.toLocaleString()}</p>
                            <span class="stat-today text-light">+${data.todayRecovered.toLocaleString()} today</span>
                        </div></div>

                        <div class="col-lg-3 col-md-6"><div class="stat-card bg-active">
                            <h5>Active Cases <i class="fas fa-heart"></i></h5><p>${data.active.toLocaleString()}</p>
                            <span class="stat-today">0 today</span> 
                        </div></div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-6"><div class="stat-card bg-critical">
                            <h5>Critical <i class="fas fa-thermometer-half"></i></h5><p>${data.critical.toLocaleString()}</p>
                            <span class="stat-today">Patients in severe condition</span>
                        </div></div>

                        <div class="col-lg-6 col-md-6"><div class="stat-card bg-population">
                            <h5>Population <i class="fas fa-users"></i></h5><p>${data.population.toLocaleString()}</p>
                            <span class="stat-today">Total global population count</span>
                        </div></div>
                    </div>
                    `;

    const loader = globalSummary.querySelector(".loader-container");
    if (loader) {
      loader.classList.add("fade-out");
    }
    setTimeout(() => (globalSummary.innerHTML = cardHTML), 400);
  } catch (error) {
    console.log(`Error Is : ${error}`);
    alert("⚠️ Unable to fetch data. Please check your internet connection.");
    showError(
      globalSummary,
      "Unable to load global summary. Please check your internet or try again later."
    );
  }
}

async function loadCountryData() {
  try {
    showLoader(countryData, "Fetching All Countries data...");
    const res = await fetch(countryAPI);
    if (!res.ok) {
      throw new Error("Failed to Fetch country Data..!");
    }
    const countries = await res.json();

    const countryHTML = countries
      .map(
        (c) => `
      <div class="col-xl-4 col-lg-6 col-md-6 d-flex align-items-stretch">
                    <div class="card card-country w-100 mb-4 shadow">
                        <div class="card-body">
                            <div class="card-header-flex">
                                <img src="${
                                  c.countryInfo.flag
                                }" class="flag" alt="${c.country} flag">
                                <span class="country-name">${c.country}</span>
                                <span class="continent"><i class="fas fa-globe me-1"></i> ${
                                  c.continent
                                }</span>
                            </div>

                            <div class="stats-list">
                                <div class="stat-item">
                                    <span class="stat-label"><i class="fas fa-viruses stat-icon"></i> Total Cases:</span>
                                    <span class="stat-value text-info">${c.cases.toLocaleString()}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label"><i class="fas fa-skull-crossbones stat-icon"></i> Total Deaths:</span>
                                    <span class="stat-value text-danger">${c.deaths.toLocaleString()}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label"><i class="fas fa-notes-medical stat-icon"></i> Recovered:</span>
                                    <span class="stat-value text-success">${c.recovered.toLocaleString()}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label"><i class="fas fa-walking stat-icon"></i> Active:</span>
                                    <span class="stat-value text-warning">${c.active.toLocaleString()}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label"><i class="fas fa-users stat-icon"></i> Population:</span>
                                    <span class="stat-value text-light">${c.population.toLocaleString()}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label"><i class="fas fa-vials stat-icon"></i> Total Tests:</span>
                                    <span class="stat-value text-secondary">${c.tests.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
      )
      .join("");
    const loader = countryData.querySelector(".loader-container");
    if (loader) loader.classList.add("fade-out");
    setTimeout(() => (countryData.innerHTML = countryHTML), 400);
  } catch (error) {
    console.log(`Error Is ${error}`);
    alert("⚠️ Unable to fetch data. Please check your internet connection.");
    showError(
      countryData,
      "Unable to load country data. Please refresh or try again later."
    );
  }
}

