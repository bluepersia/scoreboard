import { init as initScoreTeam } from "./score-team.js";
const homeEl = document.getElementById("home");
const guestEl = document.getElementById("guest");

initScoreTeam(homeEl);
initScoreTeam(guestEl);
