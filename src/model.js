const getWeatherData = async (location, tempMeasurement) => {
    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next5days?unitGroup=${tempMeasurement}&key=S5TGJ858R683JZX54HDUDQ6JN&include=days&elements=datetime,temp,precip,humidity,windspeed,conditions,icon`,
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const weatherData = await response.json();
    return weatherData;
};

const convertToCelcius = (days) => {
    days.forEach((day) => {
        const celcius = (day.temp - 32) / 1.8;
        day.temp = celcius.toFixed(1);
    });
};

const convertToFarenheit = (days) => {
    days.forEach((day) => {
        const farenheit = (day.temp - 32) / 1.8;
        day.temp = farenheit.toFixed(1);
    });
};

export { getWeatherData, convertToCelcius, convertToFarenheit};