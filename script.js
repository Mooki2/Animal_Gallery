document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const sections = document.querySelectorAll(".gallery");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.getAttribute("data-tab");
      sections.forEach(sec => {
        sec.classList.add("hidden");
        if (sec.id === tab) sec.classList.remove("hidden");
      });
    });
  });

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.getElementById("mobile-menu").addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("open");
  });
});
