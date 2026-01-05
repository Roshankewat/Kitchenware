document.addEventListener("DOMContentLoaded", function () {

  const searchBox = document.querySelector(".search_box");
  const searchInput = searchBox.querySelector("input[type='search']");
  const searchIcon = searchBox.querySelector(".fa-search, .search-icon, button");

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

  // ✅ Show results
  function showResults(query) {
    resultBox.innerHTML = "";

    if (query === "") return;

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (matches.length === 0) {
      resultBox.innerHTML = `<p class="no-result">No products found</p>`;
      return;
    }

    matches.forEach(p => {
      const item = document.createElement("div");
      item.className = "result-item";
      item.textContent = p.name;
      item.onclick = () => window.location.href = p.link;
      resultBox.appendChild(item);
    });
  }

  // ✅ While typing
  searchInput.addEventListener("input", () => {
    showResults(searchInput.value.trim());
  });

  // ✅ Enter key
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();

      const query = searchInput.value.trim();

      if (query === "") return;   // 🔴 FIX

      showResults(query);
    }
  });

  // ✅ Search icon click
  if (searchIcon) {
    searchIcon.addEventListener("click", function () {

      const query = searchInput.value.trim();

      if (query === "") return;   // 🔴 FIX

      showResults(query);
    });
  }

  // ✅ Hide results on outside click
  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) {
      resultBox.innerHTML = "";
    }
  });

});
