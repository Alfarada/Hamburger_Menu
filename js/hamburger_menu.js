export let d = document;
export default function hamburgerMenu(panelBtn, panel) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
        d.querySelector(panel).classList.toggle("is-active")
        d.querySelector(panelBtn).classList.toggle("is-active")
    }
  });
}

