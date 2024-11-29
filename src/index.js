import "./style.css";
import { displayHome } from './home.js';
import { displayMenu } from './menu.js';
import { displayAbout } from "./about.js";

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const aboutButton = document.querySelector('#about');

    displayHome();
    // initialize Buttons
    homeButton.addEventListener('click', displayHome);
    menuButton.addEventListener('click', displayMenu);
    aboutButton.addEventListener('click', displayAbout);
});