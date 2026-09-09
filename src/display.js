import searchImage from "../static/search.svg";
import ClearDayIcon from "../static/ClearDayIcon.svg";
import ClearNightIcon from "../static/ClearNightIcon.svg";
import PartlyCloudyDayIcon from "../static/PartlyCloudyDayIcon.svg";
import PartlyCloudyNightIcon from "../static/PartlyCloudyNightIcon.svg";
import CloudyIcon from "../static/CloudyIcon.svg";
import WindIcon from "../static/WindIcon.svg";
import RainIcon from "../static/RainIcon.svg";
import FogIcon from "../static/FogIcon.svg";
import SnowIcon from "../static/SnowIcon.svg";

const loadMainUpper = (upperMain) => {
    const header = document.createElement("div");
    const sky = document.createElement("span");
    const track = document.createElement("span");
    sky.textContent = "Sky";
    track.textContent = "Track";
    header.classList.add("header");
    sky.classList.add("highlighted");

    header.appendChild(sky);
    header.appendChild(track);

    const form = document.createElement("form");
    form.id = "mainForm";
    const input = document.createElement("input");
    input.id = "formInput";
    input.type = "text";
    input.autocomplete = "off";
    input.placeholder = "search for a location...";
    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("submitBtn");
    const buttonImg = document.createElement('img');
    buttonImg.id = "searchImg";
    buttonImg.src = searchImage;
    button.appendChild(buttonImg);

    form.appendChild(input);
    form.appendChild(button);

    upperMain.appendChild(header);
    upperMain.appendChild(form);
};

const openLoadingView = (body) => {
  const loadingScreen = document.createElement("div");
  loadingScreen.id = "loadingScreen";
  const loadingIcon = document.createElement("div");
  loadingIcon.id = "loadingIcon";
  loadingScreen.appendChild(loadingIcon);
  body.appendChild(loadingScreen);
};

const closeLoadingView = () => {
  const loadingScreen = document.querySelector("#loadingScreen");

  if (loadingScreen != null) loadingScreen.remove();
};

const loadErrorView = (lowerMain, value) => {
  lowerMain.replaceChildren();
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("errorMessage");
  errorMessage.textContent = `Unable to find weather data for "${value}"`;
  lowerMain.appendChild(errorMessage);

  if (!lowerMain.classList.contains("active"))
    lowerMain.classList.add("active");
};

const loadInformationView = (lowerMain, weatherData, tempMeasurement) => {
  // load upper row
  lowerMain.replaceChildren();
  const upperRow = document.createElement("div");
  upperRow.id = "lowerUpperRow";
  loadUpperRow(upperRow, weatherData, tempMeasurement, 0);

  lowerMain.appendChild(upperRow);

  // load lower row
  const lowerRow = document.createElement("div");
  lowerRow.id = "lowerLowerRow";
  loadLowerRow(lowerRow, weatherData, tempMeasurement, 0);

  lowerMain.appendChild(lowerRow);

  if (!lowerMain.classList.contains("active"))
    lowerMain.classList.add("active");
};

const loadUpperRow = (upperRow, weatherData, tempMeasurement, index) => {
  upperRow.replaceChildren();
  const todayInfo = document.createElement("div");
  todayInfo.classList.add("infoComponent");

  loadTempBtn(upperRow, tempMeasurement);

  const locationLabel = document.createElement("p");
  locationLabel.classList.add("subHeader");
  const location = weatherData.resolvedAddress;
  locationLabel.textContent =
    location.charAt(0).toUpperCase() + location.slice(1);
  todayInfo.appendChild(locationLabel);

  const iconTempLabel = document.createElement("div");
  iconTempLabel.classList.add("iconTempLabel");

  const iconImg = document.createElement("img");
  iconImg.classList.add("mainIcon");
  iconImg.src = iconify(weatherData.days[index].icon);
  iconTempLabel.appendChild(iconImg)
  
  const tempLabel = document.createElement("p");
  tempLabel.classList.add("mainTemp");
  tempLabel.textContent =
    weatherData.days[index].temp + tempStringify(tempMeasurement);
  iconTempLabel.appendChild(tempLabel);

  const dayWeatherLabel = document.createElement("p");
  dayWeatherLabel.classList.add("dayWeatherLabel");
  const todayValue = new Date(weatherData.days[index].datetime);
  dayWeatherLabel.textContent = `${dayStringify(todayValue.getDay())} | ${weatherData.days[index].conditions}`;

  todayInfo.appendChild(locationLabel);
  todayInfo.appendChild(iconTempLabel);
  todayInfo.appendChild(dayWeatherLabel);

  upperRow.appendChild(todayInfo);
};

const loadLowerRow = (lowerRow, weatherData, tempMeasurement, index) => {
  lowerRow.replaceChildren();
  const fiveDayForecastContainer = document.createElement('div');
  fiveDayForecastContainer.id = "fiveDayForecastContainer";
  const fiveDayForecastHeader = document.createElement("p");
  fiveDayForecastHeader.classList.add("subHeader");
  fiveDayForecastHeader.textContent = "6 days Forecast";
  const fiveDayForecastElements = document.createElement("div");
  fiveDayForecastElements.id = "lowerInfoContainer";
  populateFiveDays(fiveDayForecastElements, weatherData, tempMeasurement);
  fiveDayForecastContainer.appendChild(fiveDayForecastHeader);
  fiveDayForecastContainer.appendChild(fiveDayForecastElements);

  const highlightContainer = document.createElement("div");
  highlightContainer.id = "highlightContainer";
  const highlightHeader = document.createElement("p");
  highlightHeader.classList.add("subHeader");
  highlightHeader.textContent = "Highlights:";
  const highlightStatsContainer = document.createElement("div");
  const precipitation = document.createElement("p");
  precipitation.textContent = `Precipitation: ${weatherData.days[index].precip}%`;
  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${weatherData.days[index].humidity}%`;
  const windspeed = document.createElement("p");
  windspeed.textContent = `Windspeed: ${weatherData.days[index].windspeed}km/h`;
  highlightStatsContainer.appendChild(precipitation);
  highlightStatsContainer.appendChild(humidity);
  highlightStatsContainer.appendChild(windspeed);
  highlightContainer.appendChild(highlightHeader);
  highlightContainer.appendChild(highlightStatsContainer);

  lowerRow.appendChild(fiveDayForecastContainer);
  lowerRow.appendChild(highlightContainer);
};
const loadTempBtn = (upperRow, tempMeasurement) => {
  const btn = document.createElement("button");
  btn.id = "tempButton";
  btn.textContent = tempStringify(tempMeasurement);
  upperRow.appendChild(btn);
};

const populateFiveDays = (mainContainer, weatherData, tempMeasurement) => {
  const forecast = 5;
  for (let i = 0; i <= forecast; i++) {
    const component = document.createElement("div");
    component.classList.add("infoComponent");
    component.classList.add("clickableComponents");
    component.id = i;

    const day = document.createElement("p");
    const todayValue = new Date(weatherData.days[i].datetime);
    day.textContent = `${dayStringify(todayValue.getDay())}`;
    component.appendChild(day);

    const icon = document.createElement("img");
    icon.src = iconify(weatherData.days[i].icon);
    component.appendChild(icon);

    const temp = document.createElement("p");
    temp.textContent =
      weatherData.days[i].temp + tempStringify(tempMeasurement);
    component.appendChild(temp);

    mainContainer.appendChild(component);
  }
};

const iconify = (iconCode) => {
  switch (iconCode) {
    case "clear-day":
      return ClearDayIcon;
    case "clear-night":
      return ClearNightIcon;
    case "partly-cloudy-day":
      return PartlyCloudyDayIcon;
    case "partly-cloudy-night":
      return PartlyCloudyNightIcon;
    case "cloudy":
      return CloudyIcon;
    case "rain":
      return RainIcon;
    case "snow":
      return SnowIcon;
    case "fog":
      return FogIcon;
    case "wind":
      return WindIcon;
    default:
      return ClearDayIcon;
  }
};

const tempStringify = (tempMeasurement) => {
  switch (tempMeasurement) {
    case "metric":
      return "°C";
    default:
      return "°F";
  }
};

const dayStringify = (numDay) => {
  switch (numDay) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    default:
      return "Saturday";
  }
};

export {
  loadMainUpper,
  openLoadingView,
  closeLoadingView,
  loadErrorView,
  loadInformationView,
  loadUpperRow,
  loadLowerRow,
};