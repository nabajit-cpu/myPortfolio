const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const CONTACT_EMAIL = "nabajitboro796@gmail.com";

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._hideTimer);
  showToast._hideTimer = setTimeout(() => toast.classList.remove("show"), 4000);
}

function openEmailClient(href) {
  const a = document.createElement("a");
  a.href = href;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

document.querySelectorAll(".email-link").forEach((link) => {
  link.addEventListener("click", async (e) => {
    const href =
      link.getAttribute("href") ||
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hello Nabajit")}`;

    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      showToast(`Copied ${CONTACT_EMAIL} — opening mail app…`);
    } catch {
      showToast(`Email: ${CONTACT_EMAIL}`);
    }

    e.preventDefault();
    openEmailClient(href);
  });
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  const from = 0;
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(from + (target - from) * eased));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(".stat-num[data-count]").forEach((numEl) => {
        const target = Number(numEl.dataset.count || "0");
        animateCount(numEl, target);
      });
      statsObs.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);

const statsBlock = document.querySelector(".hero-stats");
if (statsBlock) statsObs.observe(statsBlock);
