import {
  getWeatherData,
  convertToCelcius,
  convertToFarenheit,
} from "./model.js";

import {
  openLoadingView,
  closeLoadingView,
  loadErrorView,
  loadInformationView,
  loadUpperRow,
  loadLowerRow,
} from "./display.js";

// declare a global variable weatherData to be accessed by other event handlers
let weatherData;
let tempMeasurement = "metric";
let index = 0;

const handleSubmit = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.id === "mainForm") {
      const location = document.querySelector("input").value;
      openLoadingView(document.querySelector("body"));
      (async () => {
        try {
          weatherData = await getWeatherData(location, tempMeasurement);
          console.log(
            `location: ${JSON.stringify(weatherData.resolvedAddress)}`,
          );
          console.log("data: " + JSON.stringify(weatherData));

          loadInformationView(
            document.querySelector("#mainLower"),
            weatherData,
            tempMeasurement,
          );
        } catch (error) {
          console.log("error: " + error);
          loadErrorView(document.querySelector("#mainLower"), location);
        }
        closeLoadingView();
      })();
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("clickableComponents")) {
      index = e.target.id;
      loadUpperRow(
        document.querySelector("#lowerUpperRow"),
        weatherData,
        tempMeasurement,
        index,
      );

      loadLowerRow(
        document.querySelector("#lowerLowerRow"),
        weatherData,
        tempMeasurement,
        index,
      );
    } else if (e.target.id == "tempButton") {
      if (tempMeasurement === "metric") {
        tempMeasurement = "us";
        convertToFarenheit(weatherData.days);
      } else {
        tempMeasurement = "metric";
        convertToCelcius(weatherData.days);
      }

      loadUpperRow(
        document.querySelector("#lowerUpperRow"),
        weatherData,
        tempMeasurement,
        index,
      );

      loadLowerRow(
        document.querySelector("#lowerLowerRow"),
        weatherData,
        tempMeasurement,
        index,
      );
    }
  });
};

export { handleSubmit };