const fbContainer = document.getElementById("facebook-container");

addEventListener("resize", () => {
  if (window.innerWidth <= 500) {
    fbContainer.width = "380";
  }
});
