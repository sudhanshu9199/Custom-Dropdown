const dropdownContainer = document.querySelector(".dropdown-container");
const dropdownSelect = document.querySelector(".dropdown-selected");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// Toggle dropdown visibility
dropdownSelect.addEventListener("click", () => {
  dropdownContainer.classList.toggle("active");
});

// Handle item selection
dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove previous selection
    dropdownItems.forEach((i) => i.classList.remove("selected"));

    // Set new Selection
    item.classList.add("selected");
    dropdownSelect.textContent = item.firstChild.textContent.trim();
    dropdownContainer.classList.remove("active");
  });
});

// close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownContainer.classList.remove("active");
  }
});
