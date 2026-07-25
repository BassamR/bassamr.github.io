// ------- current year in footer -------
document.getElementById("year").textContent = new Date().getFullYear();

// ------- mobile menu toggle -------
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// close the menu after clicking a link (mobile)
links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// ------- back to top (scroll to the real top, not the sticky nav) -------
document.querySelectorAll('a[href="#top"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ------- theme toggle (persists choice) -------
const themeBtn = document.querySelector(".theme-toggle");
const root = document.documentElement;

// restore saved preference
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);

themeBtn.addEventListener("click", () => {
  // figure out the currently effective theme
  const current =
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
