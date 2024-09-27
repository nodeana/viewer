import "./style.css";
import { getClientIP } from "./ip.js";

getClientIP().then((ip) => {
  document.querySelector("#app").innerHTML = `<h1>${ip}</h1>`;
});
