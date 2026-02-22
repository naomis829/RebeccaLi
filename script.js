document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU TOGGLE
  ========================= */

  const toggle = document.querySelector(".menu-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (toggle && dropdown) {
    toggle.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });
  }


  /* =========================
     IMAGE MODAL + MOBILE CAPTIONS
  ========================= */

  const images = document.querySelectorAll(".image-item img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");

  // Only run modal logic if modal elements exist
  if (images.length && modal && modalImg && modalCaption) {

    images.forEach(img => {
      img.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
          // MOBILE → toggle caption
          const item = img.parentElement;

          document.querySelectorAll(".image-item").forEach(i => {
            if (i !== item) i.classList.remove("active");
          });

          item.classList.toggle("active");

        } else {
          // DESKTOP → open modal
          modal.classList.add("active");
          modalImg.src = img.src;
          modalCaption.textContent =
            img.parentElement.querySelector(".image-caption").textContent;
        }

      });
    });

    modal.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }


  /* =========================
     EMAIL OBFUSCATION
  ========================= */

  const emailContainer = document.getElementById("email-link");

  if (emailContainer) {
    const parts = ["yr", "li", "@", "alu", "mni", ".", "stanford", ".", "edu"];
    const email = parts.join("");

    const link = document.createElement("a");
    link.href = "mailto:" + email;
    link.textContent = email; // visible text

    emailContainer.appendChild(link);
  }

});