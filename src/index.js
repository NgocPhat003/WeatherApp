import "./styles.css";
import { loadMainUpper } from "./display.js";
import { handleSubmit } from "./controller.js";

loadMainUpper(document.querySelector("#mainUpper"));

handleSubmit();