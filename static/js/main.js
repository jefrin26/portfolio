(() => {
  "use strict";

  /* ── Theme toggle ─────────────────────────── */
  const toggle = document.getElementById("theme-toggle");
  toggle?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  /* ── Dynamic year ─────────────────────────── */
  const year = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  const yearStatsEl = document.getElementById("year-stats");
  if (yearEl) yearEl.textContent = String(year);
  if (yearStatsEl) yearStatsEl.textContent = String(year);

  /* ── Scroll reveal ────────────────────────── */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ── Active nav link on scroll ────────────── */
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            navLinks.forEach((link) =>
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`
              )
            );
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => navObserver.observe(section));
  }
})();