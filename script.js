document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const body = document.body;

  closeIcon.style.display = "none";

  // Show mobile menu
  menuIcon.addEventListener("click", function () {
    overlay.classList.remove("hidden");
    overlay.style.display = "block";

    // Blur background
    body.style.overflow = "hidden";
    if (!document.getElementById("blur-bg")) {
      const blurDiv = document.createElement("div");
      blurDiv.id = "blur-bg";
      blurDiv.style.position = "fixed";
      blurDiv.style.top = "0";
      blurDiv.style.left = "0";
      blurDiv.style.width = "100vw";
      blurDiv.style.height = "100%";
      blurDiv.style.background = "rgba(0,0,0,0.3)";
      blurDiv.style.backdropFilter = "blur(4px)";
      blurDiv.style.zIndex = "40";
      blurDiv.addEventListener("click", hideMenu);
      document.body.appendChild(blurDiv);
    }

    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
  });

  // Hide mobile menu
  function hideMenu() {
    overlay.classList.add("hidden");
    overlay.style.display = "none";
    body.style.overflow = "";
    const blurDiv = document.getElementById("blur-bg");
    if (blurDiv) blurDiv.remove();
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }

  closeIcon.addEventListener("click", hideMenu);
});
