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