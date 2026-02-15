const toggle = document.querySelector(".menu-toggle");
const dropdown = document.querySelector(".dropdown");

toggle.addEventListener("click", () => {
dropdown.classList.toggle("active");
});


const images = document.querySelectorAll(".image-item img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

images.forEach(img => {
    img.addEventListener("click", () => {
  
      if (window.innerWidth <= 768) {
        // MOBILE → toggle caption
        const item = img.parentElement;
  
        // close others (optional)
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
