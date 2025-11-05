
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search_box");
  const searchInput = searchBox.querySelector("input[type='search']");
  const searchIcon =
    searchBox.querySelector(".fa-search, .search-icon, button"); // updated selector

  // ✅ Product list
  const products = [
    { name: "Noise Less Cover", link: "box-img1.html" },
    { name: "Health & Personal Care", link: "box-img2.html" },
    { name: "Furniture", link: "box-img3.html" },
    { name: "Mobiles", link: "box-img4.html" },
    { name: "Make-up & Cusmetics", link: "box-img5.html" },
    { name: "Swing Dustbin", link: "box-img6.html" },
    { name: "New Arrival & Toys", link: "box-img7.html" },
    { name: "Fashion & Trends", link: "box-img8.html" },
  ];

  const resultBox = document.createElement("div");
  resultBox.className = "result-box";
  searchBox.appendChild(resultBox);

  // ✅ Show product results
  function showResults(query) {
    resultBox.innerHTML = "";
    if (query === "") return;

    const matches = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (matches.length === 0) {
      resultBox.innerHTML = `<p class="no-result">No products found</p>`;
      return;
    }

    matches.forEach((p) => {
      const item = document.createElement("div");
      item.className = "result-item";
      item.textContent = p.name;
      item.addEventListener("click", () => {
        window.location.href = p.link;
      });
      resultBox.appendChild(item);
    });
  }

  // ✅ While typing
  searchInput.addEventListener("input", function () {
    showResults(searchInput.value.trim());
  });

  // ✅ When pressing Enter (no popup alert)
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      const match = products.find((p) =>
        p.name.toLowerCase().includes(query)
      );
      if (match) {
        window.location.href = match.link;
      } else {
        // show "No products found" in result box instead of alert
        resultBox.innerHTML = `<p class="no-result">No products found</p>`;
      }
    }
  });

  // ✅ When clicking search icon (no popup alert)
  if (searchIcon) {
    searchIcon.addEventListener("click", function () {
      const query = searchInput.value.trim().toLowerCase();
      const match = products.find((p) =>
        p.name.toLowerCase().includes(query)
      );
      if (match) {
        window.location.href = match.link;
      } else {
        // show "No products found" in result box instead of alert
        resultBox.innerHTML = `<p class="no-result">No products found</p>`;
      }
    });
  }

  // ✅ Hide results when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) resultBox.innerHTML = "";
  });
});

