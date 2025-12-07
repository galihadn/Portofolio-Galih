/* ===== POPUP KONTAK ===== */
function showMessage() {
  alert("Terima kasih! Pesan kamu sudah masuk.");
}

/* ===== ANIMASI FADE-IN SAAT SCROLL ===== */
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

/* ===== SMOOTH SCROLL NAVBAR ===== */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ===== DARK MODE ===== */
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

/* ===== BACK TO TOP ===== */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.style.display = window.scrollY > 280 ? "block" : "none";
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===== TYPING EFFECT ===== */
const typingText = ["Web Admin", "Sistem Informasi", "Front-End Basic", "Data Management"];
let index = 0;
let char = 0;

function typingEffect() {
  const element = document.getElementById("typing");

  if (!element) return;

  if (char < typingText[index].length) {
    element.textContent += typingText[index][char];
    char++;
    setTimeout(typingEffect, 90);
  } else {
    setTimeout(() => {
      element.textContent = "";
      index = (index + 1) % typingText.length;
      char = 0;
      typingEffect();
    }, 900);
  }
}

typingEffect();
