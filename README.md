# Project-11 🌍 Global COVID-19 Tracker

A modern, responsive **COVID-19 Data Dashboard** built using **HTML, CSS (Bootstrap), and JavaScript**.  
It fetches **real-time pandemic data** from the [disease.sh API](https://disease.sh/) and displays both **global statistics** and **country-wise reports** in a clean dark-themed UI.

---

## 🚀 Features

- 🌐 **Global Summary Section**
  - Shows total cases, deaths, recoveries, and active cases.
  - Real-time updates with today’s new numbers.
  - Dynamic cards with smooth hover animations.

- 🗺️ **Country-Wise Detailed Data**
  - Displays each country’s flag, continent, and complete COVID stats.
  - Includes total cases, deaths, recoveries, active, tests, and population.
  - Organized using Bootstrap grid system for perfect responsiveness.

- ⚡ **Dynamic Data Loading**
  - Fetches data from an external public API.
  - Includes loader animations and graceful error handling.

- 🎨 **Modern Dark Theme UI**
  - Built with `Bootstrap 5` and `Font Awesome` icons.
  - Uses `Poppins` Google Font for a clean modern typography.

- 📊 **Smooth Scroll + Custom Scrollbar**
  - Adds smooth scrolling and a stylish scrollbar for long country lists.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| 💻 Frontend | HTML5, CSS3, JavaScript |
| 🎨 Styling | Bootstrap 5, Bootstrap Icons ,FontAwesome |
| 🌦️ API | [disease.sh - Open Disease Data API](https://disease.sh/docs/) |
| 🔤 Font | Google Fonts (Poppins) |

---

---

## 🔗 API Used

**API Source:** [disease.sh - Open Disease Data API](https://disease.sh/docs/)  
**Endpoints Used:**
- 🌎 Global Data → `https://disease.sh/v3/covid-19/all`
- 🌏 Country Data → `https://disease.sh/v3/covid-19/countries`
---
## 📂 Project Structure
```
Corona-Api/
│
├── index.html
│
├── assets/
│ ├── css/
│ │ ├── bootstrap.min.css
│ │ ├── bootstrap-icons-min.css
│ │ ├── fonts.css
│ │ └── style.css
│ │
│ └── js/
│ └── bootstrap.bundle.min.js
│
└── README.md
```
---

## ⚙️ How to Run

1. **Download or Clone** this project  
   ```bash
   git clone https://github.com/yourusername/global-covid19-tracker.git
   
2. Open the folder and run index.html directly in your browser.

3. Double-click the file index.html OR run it using VS Code Live Server

4. That’s it! The dashboard will fetch live data and display all global and country reports.

---

---
## 🎨 Customization

- Change color theme in style.css

- Modify or add new Bootstrap icons

- Update font from fonts.css if 
---


**Example Response:**
```json
{
  "cases": 704789654,
  "deaths": 6895421,
  "recovered": 675842100,
  "active": 22896133,
  "updated": 1717628473000
}
```
---

## 👨‍💻 Author

- Tosif Kureshi
- Built with ❤️ using HTML, CSS, JS, and Bootstrap.
- 📍 India

## 📸 Sample Output Screenshot

Below is an actual run of the program in the terminal:

## Dashboard

![Program Output](/Corona-API/assets/images/1.png)

## All Countries

![Program Output](/Corona-API/assets/images/3.png)

## Error Hanndling...

![Program Output](/Corona-API/assets/images/2.png)


# Our Code 
## HTML
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Global COVID-19 Tracker</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Google Font: Poppins -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="./assets/css/style.css">
    
</head>

<body class="bg-dark text-light">
    <div class="container py-4">
        <h2 class="fw-bold text-center mb-3 text-light ">Global COVID-19 Tracker (All Countries)</h2>
        <p id="lastUpdated" class="text-center text-secondary"></p>
        <hr class="border-secondary mb-4">

        <!-- 🌎 Global Summary -->
        <div class="d-flex align-items-center my-3">
            <i class="bi bi-globe2 text-info fs-4 me-2"></i>
            <h4 class="fw-bold text-light ">Global Summary</h4>
        </div>
        <div class="row g-4 mb-5 mt-3" id="globalSummary"></div>

        <hr class="border-secondary my-4">

        <!-- 🌏 All Countries -->
        <div class="d-flex align-items-center section-header ">
            <i class="bi bi-globe2 text-info fs-4 me-2"></i>
            <h4 class="fw-bold text-light mb-0 ">All Countries Data</h4>
        </div>
        <div id="countryCardsWrapper">
            <div id="countryData" class="row g-4"></div>
        </div>

    </div>
</body>
<script src="./assets/js/script.js"></script>
<script>
    loadGlobalSummary();
    loadCountryData();
</script>

</html>
```

## CSS
```CSS
body {
  background-color: #0d1117;
  color: #e6edf3;
  font-family: "Poppins", sans-serif;
}
h2,
h4,
h5,
p,
span {
  font-family: "Poppins", sans-serif;
}
.container {
  padding-top: 40px;
}

.main-title {
  text-align: center;
  color: #d9d9f3;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.last-updated {
  text-align: center;
  color: #90a4ae;
  font-size: 0.9rem;
  margin-bottom: 40px;
}


/* --- Global Summary Card Styles --- */
.stat-card {
  border-radius: 12px;
  padding: 20px;
  color: white;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.stat-card h5 {
  font-size: 1rem;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stat-card p {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1.1;
}

.stat-today {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Global Card Colors */
.bg-cases {
  background-color: #3f51b5;
}

.bg-deaths {
  background-color: #c62828;
}

.bg-recovered {
  background-color: #00796b;
}

.bg-active {
  background-color: #ff9800;
}

.bg-critical {
  background-color: #5d4037;
}

.bg-population {
  background-color: #6a1b9a;
}

/* --- Country Card Styles --- */
.card-country {
  background-color: #0e1114;
  border-radius: 10px;
  color: #e4e6eb;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  margin-bottom: 25px;
  height: 100%;
}

.card-country:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.card-body {
  padding: 15px;
}

.card-header-flex {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.flag {
  width: 30px;
  height: 20px;
  border-radius: 3px;
  margin-right: 10px;
}

.country-name {
  font-weight: 700;
  font-size: 1.2rem;
  color: #ff9a76;
}

.continent {
  color: #a0a0c0;
  font-size: 0.9rem;
  margin-left: auto;
}

.stat-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px dashed #3a3a50;
  font-size: 0.95rem;
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-label {
  width: 50%;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #c0c0d9;
}

.stat-icon {
  margin-right: 8px;
  width: 15px;
}

.stat-value {
  font-weight: 700;
  margin-left: auto;
  color: #fff;
}

#countryCardsWrapper {
  max-height: 80vh;
  overflow-y: auto;
  padding-right: 15px;
  margin-right: -15px;
}

/* Custom Scrollbar */
#countryCardsWrapper::-webkit-scrollbar {
  width: 8px;
}

#countryCardsWrapper::-webkit-scrollbar-thumb {
  background-color: #444;
  border-radius: 10px;
}

#countryCardsWrapper::-webkit-scrollbar-thumb:hover {
  background-color: #666;
}

/* Country Icon Coloring */
.fa-viruses,
.fa-globe {
  color: #00bcd4;
}

.fa-skull-crossbones {
  color: #f44336;
}

.fa-walking {
  color: #ffeb3b;
}

.fa-notes-medical {
  color: #4caf50;
}

.fa-users {
  color: #9c27b0;
}

.fa-vials {
  color: #5c6bc0;
}

/* Loader */
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #2c2f33;
  border-top: 5px solid #c5cdce;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Error Message */
.error-message {
  text-align: center;
  background-color: #1e1e2f;
  border: 1px solid #ff4d4d;
  color: #ffbaba;
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.section-header {
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 35px;
  padding-bottom: 15px;
  border-bottom: 1px solid #38383d;
}

```

## JavaScript
```JavaScript
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


```


