import { setPlayers } from "./modules/teams.js";

const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBar');

const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

hamburger.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);

const players = document.querySelector('.players__wrapper');
setPlayers(players);

