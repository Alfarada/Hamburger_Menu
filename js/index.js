import hamburgerMenu, { d } from "./hamburger_menu.js";

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
