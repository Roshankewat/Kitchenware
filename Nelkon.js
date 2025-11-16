document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search_box input[type='search']");
  const productBoxes = document.querySelectorAll(".shop-section .box"); // all product boxes

  searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    productBoxes.forEach(box => {
      const itemName = box.querySelector("h2").textContent.toLowerCase();

      if (itemName.includes(searchValue)) {
        box.style.display = "block";  // show
      } else {
        box.style.display = "none";   // hide
      }
    });
  });
});
