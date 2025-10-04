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
