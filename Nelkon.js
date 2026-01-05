document.addEventListener("DOMContentLoaded", function () {

  // ✅ Select the search input inside the search_box div
  const searchInput = document.querySelector(".search_box input[type='search']");
  // ✅ Select all product boxes
  const productBoxes = document.querySelectorAll(".shop-section .box");

  if (!searchInput || productBoxes.length === 0) {
    console.error("Search input or product boxes not found!");
    return;
  }

  // ✅ When user types in the search bar
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();

    let foundAny = false;

    productBoxes.forEach((box) => {
      const title = box.querySelector("h2")?.textContent.toLowerCase() || "";

      // ✅ If match found
      if (title.includes(query)) {
        box.style.display = "block";
        foundAny = true;
      } else {
        box.style.display = "none";
      }
    });

    // ✅ Optional: show message if nothing found
    let msg = document.querySelector("#no-results");
    if (!msg) {
      msg = document.createElement("p");
      msg.id = "no-results";
      msg.style.textAlign = "center";
      msg.style.marginTop = "20px";
      msg.style.fontWeight = "bold";
      document.querySelector(".shop-section").after(msg);
    }

    msg.textContent = foundAny || query === "" ? "" : "No matching products found.";
  });
});
