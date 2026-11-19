document.addEventListener("DOMContentLoaded", () => {
  // Mobile navbar toggle
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Toggle tutorials section
  const toggleBtn = document.getElementById("toggle-tutorials");
  const tutorialsContent = document.getElementById("tutorials-content");

  if (toggleBtn && tutorialsContent) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = tutorialsContent.classList.toggle("is-open");
      toggleBtn.textContent = isOpen ? "Ocultar tutoriales" : "Mostrar tutoriales";
    });
  }

  // Modal controls
  const openModalBtn = document.getElementById("open-domain-modal");
  const closeModalBtn = document.getElementById("close-domain-modal");
  const modal = document.getElementById("domain-modal");

  if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", () => {
      modal.classList.add("is-open");
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("is-open");
      }
    });
  }
});
