document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const blurDiv = document.getElementById("blur-bg");
  const body = document.body;

  closeIcon.style.display = "none";

  // Show mobile menu
  menuIcon.addEventListener("click", function () {
    overlay.classList.remove("hidden");
    overlay.style.display = "block";

    // blur background
    blurDiv.classList.remove("hidden");
    body.style.overflow = "hidden";
    blurDiv.addEventListener("click", hideMenu);

    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
  });

  // Hide mobile menu
  function hideMenu() {
    overlay.classList.add("hidden");
    overlay.style.display = "none";
    blurDiv.classList.add("hidden");
    body.style.overflow = "";
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }

  closeIcon.addEventListener("click", hideMenu);
});
