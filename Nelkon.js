document.addEventListener("DOMContentLoaded", function () {

  const searchBox = document.querySelector(".search_box");
  const searchInput = searchBox.querySelector("input[type='search']");
  const searchIcon = searchBox.querySelector(".fa-search, .search-icon, button");

  const products = [
    { name: "Noise Less Cover", link: "box-img1.html" },
    { name: "Noise less bins", link: "box-img2.html" },
    { name: "Pedal bin", link: "box-img3.html" },
    { name: "Hamper bin", link: "box-img4.html" },
    { name: "Noise less cover-bin", link: "box-img5.html" },
    { name: "Swing Dustbin", link: "box-img6.html" },
    { name: "Gardener bin", link: "box-img7.html" },
    { name: "Push can solid", link: "box-img8.html" },

    { name: "Rabit bin", link: "morebin1.html" },
    { name: "Bird bin", link: "morebin2.html" },
    { name: "Penguin bin", link: "morebin3.html" },
    { name: "Frog bin", link: "morebin4.html" },
    { name: "Brinjal", link: "morebin5.html" },
    { name: "Dolphin bin", link: "morebin6.html" },
    { name: "Gardener bin", link: "box-img7.html" },
    { name: "Push can solid", link: "box-img8.html" },
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
