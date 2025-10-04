# Project 10 : 🌤️ Weather Checker App
 
 ---
 
A sleek and modern weather checking web app built using **HTML, CSS, JavaScript, and Bootstrap**.  
This app allows users to get **live weather details** using **latitude and longitude coordinates** through the **OpenWeather API**.

---

## 🧠 Features

- ✅ Fetches real-time weather data from coordinates  
- 🌦️ Dynamic icons based on weather conditions  
- ⚡ Shows temperature, humidity, wind speed & more  
- 💫 Includes a loader animation while fetching data  
- 📱 Fully responsive using Bootstrap  
- 🔤 Integrated Google Font – *Montserrat*

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| 💻 Frontend | HTML5, CSS3, JavaScript |
| 🎨 Styling | Bootstrap 5, Bootstrap Icons |
| 🌦️ API | [OpenWeather API](https://openweathermap.org/api) |
| 🔤 Font | Google Fonts (Montserrat) |

---

## 📂 Project Structure
```
weather-checker/
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
   git clone https://github.com/your-username/weather-checker.git
   
2. Open the folder and run index.html directly in your browser.

3. Replace the API key in the JavaScript code:
   ```bash
   const apiKey = "YOUR_API_KEY";
4. Enter latitude and longitude, then click Get Weather
  ```bash
  Latitude: 21.1702
  Longitude: 72.8311
```
---
## 🎨 Customization

- Change color theme in style.css

- Modify or add new Bootstrap icons

- Update font from fonts.css if 
---

## 💡 Future Enhancements

- 🔍 Search weather by city name

- 📅 Add 5-day weather forecast

- 🌙 Add dark/light mode toggle

- 💾 Save recent searches in local storage
  
  ---

## 👨‍💻 Author

- Tosif Kureshi
- Built with ❤️ using HTML, CSS, JS, and Bootstrap.
- 📍 India

## 📸 Sample Output Screenshot

Below is an actual run of the program in the terminal:

![Program Output](/Weather-API/assets/images/1.png)

![Program Output](/Weather-API/assets/images/2.png)
   


## Our Code 

## HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather Checker</title>
  <!-- Bootstrap CSS -->
  <link href="./assets/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap Icons -->
  <link href="./assets/css/bootstrap-icons-min.css" rel="stylesheet">
  <!-- Fonts -->
  <link href="./assets/css/fonts.css" rel="stylesheet">
  <!-- CSS File -->
  <link rel="stylesheet" href="./assets/css/style.css">

  
</head>
<body>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-11">
      <div class="weather-box row g-4">
        
        <!-- Left side -->
        <div class="col-lg-5 border-end pe-4">
          <h1 class="weather-title mb-4 fw-bold"><i class="bi bi-cloud-sun"></i> Weather Checker</h1>
          <p class="weather-desc mb-4">Enter geographical coordinates below to retrieve live weather data.</p>

          <div class="mb-3">
            <label for="lat" class="form-label">Latitude:</label>
            <input type="number" id="lat" class="form-control" placeholder="21.1702" value="21.1702">
          </div>
          <div class="mb-3">
            <label for="lon" class="form-label">Longitude:</label>
            <input type="number" id="lon" class="form-control" placeholder="72.8311" value="72.8311">
          </div>
          <button id="getWeather" class="btn btn-primary w-100 fw-bold ">GET WEATHER</button>
        </div>

        <!-- Right side -->
        <div class="col-lg-7 ps-4">
          <div id="weatherResult">
          <!-- Illustration using emoji / icon -->
          <div class="text-center">
            <i class="bi bi-cloud-sun display-1 text-primary"></i>
            <h4 class="mt-3 fw-bold text-secondary">No Weather Data Yet</h4>
            <p class="text-muted">
              Enter coordinates and click <b>Get Weather</b> <br>
              to see live weather updates 🌍
            </p>
            <!-- small illustration style -->
            <div class="mt-3">
              <i class="bi bi-geo-alt-fill fs-1 text-danger"></i>
              <i class="bi bi-arrow-right fs-3 text-secondary mx-2"></i>
              <i class="bi bi-cloud-rain-fill fs-1 text-info"></i>
            </div>
          </div>
        </div>

        </div>

      </div>
    </div>
  </div>
</div>

<!-- Bootstrap JS -->
<script src="./assets/js/bootstrap.bundle.min.js"></script>
<!-- JavaScript File-->
<script src="./assets/js/script.js"></script>

</body>
</html>

```

## CSS

```css
    body {
      font-family: "Montserrat", sans-serif;
      background: #f8f9fa;
      min-height: 100vh;
      padding: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .weather-box {
      background: #fff;
      border-radius: 18px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .weather-title {
      font-weight: 700;
      font-size: 2rem;
      color: #007bff;
    }
    .weather-desc{
        color: rgba(108, 117, 125, 1);
    }
    .form-control{
        border: 1px solid #ced4da;
        border-radius: 8px;
        padding: 10px 15px;
        font-weight: 400;
    }
    .temp-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      background-color: #e6f2ff;
      border-radius: 10px;
      padding: 15px;
    }
    .temp-main {
      font-size: 3rem;
      font-weight: bold;
      color: #007bff;
    }
    .icon-large {
      padding-top: 5px;
      font-size: 60px;
      color: #007bff;
    }
    .weather-card {
      border-radius: 12px;
      background: #FAFAFA;
      border: 1px solid #E0E0E0;
      text-align: center;
      padding: 15px;
      transition: 0.3s;
    }
    .weather-card:hover {
      background: #eef4ff;
      transform: scale(1.00);
    }
    .btn{
        background-color: #007bff;
        border-radius: 8px;
        padding: 12px 0;
        transition: background-color 0.3s;
    }
    .weather-card i {
      font-size: 24px;
      color: #007bff;
    }

```
## JavaScript

```JS
document.getElementById("getWeather").addEventListener("click", () => {
  const lat = document.getElementById("lat").value.trim();
  const lon = document.getElementById("lon").value.trim();

  if (!lat || !lon) {
    alert("⚠️ Please enter both Latitude & Longitude!");
    return;
  }

  getWeather(lat, lon);
});

async function getWeather(lat, lon) {
  const apiKey = "4b5d762601b9270b458887d63d2910ac";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  document.getElementById("weatherResult").innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column" style="min-height:250px">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
            <p class="mt-3 text-secondary">Fetching live data...</p>
        </div>
      `;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p class="text-danger"> Error: ${data.message}</p>`;
      return;
    }
    // Weather condition icon
    let weatherIcon = "bi-cloud-sun";
    const weatherMain = data.weather[0].main.toLowerCase();
    if (weatherMain.includes("cloud")) weatherIcon = "bi-cloud-fill";
    else if (weatherMain.includes("rain")) weatherIcon = "bi-cloud-rain-fill";
    else if (weatherMain.includes("clear")) weatherIcon = "bi-sun-fill";
    else if (weatherMain.includes("storm") || weatherMain.includes("thunder"))
      weatherIcon = "bi-cloud-lightning-fill";
    else if (weatherMain.includes("snow")) weatherIcon = "bi-snow";
    else if (
      weatherMain.includes("mist") ||
      weatherMain.includes("fog") ||
      weatherMain.includes("haze")
    )
      weatherIcon = "bi-cloud-fog-fill";

    // UI Update
    document.getElementById("weatherResult").innerHTML = `
        <h4 class="mb-3 text-center fw-semibold"><i class="bi bi-geo-alt-fill"></i> ${
          data.name || "Unknown Location"
        }, ${data.sys.country || "N/A"}</h4>
        <div class="temp-box mb-3 d-flex justify-content-center gap-4">
          <i class="bi ${weatherIcon} icon-large"></i>
          <div class="temp-main">${data.main.temp}°C</div>
        </div>
        <h6 class="text-uppercase text-muted my-3 text-center fw-semibold">${
          data.weather[0].description
        }</h6>

        <div class="row g-3">
          <div class="col-6 col-md-4">
            <div class="weather-card">
              <i class="bi bi-thermometer-half"></i>
              <div class="py-2"><strong>${data.main.feels_like}°C</strong></div>
              <small>Feels Like</small>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="weather-card">
              <i class="bi bi-arrow-up"></i>
              <div class="py-2"><strong>${data.main.temp_max}°C</strong></div>
              <small>Max Temp</small>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="weather-card">
              <i class="bi bi-arrow-down"></i>
              <div class="py-2"><strong>${data.main.temp_min}°C</strong></div>
              <small>Min Temp</small>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="weather-card">
              <i class="bi bi-droplet"></i>
              <div class="py-2"><strong>${data.main.humidity}%</strong></div>
              <small>Humidity</small>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="weather-card">
              <i class="bi bi-wind"></i>
              <div class="py-2"><strong>${data.wind.speed} m/s</strong></div>
              <small>Wind Speed</small>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="weather-card">
              <i class="bi bi-flag"></i>
              <div class="py-2"><strong>${
                data.sys.country || "N/A"
              }</strong></div>
              <small>Country</small>
            </div>
          </div>
        </div>
      `;
  } catch (err) {
    document.getElementById(
      "weatherResult"
    ).innerHTML = `<p class="text-danger"> Failed to fetch weather.<br>${err.message}</p>`;
  }
}

```




