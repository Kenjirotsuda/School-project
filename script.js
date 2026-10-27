document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.querySelector("span").textContent = isOpen ? "−" : "＋";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector("span").textContent = "＋";
      });
    });
  }

  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".site-nav a");

  function updateActiveLink() {
    let activeId = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 150) activeId = section.id;
    });

    links.forEach((link) => {
      if (link.getAttribute("href") === `#${activeId}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
});
