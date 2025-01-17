const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const parentDropdown = trigger.closest(".dropdown"); // Find the parent .dropdown
    const dropdownMenu = parentDropdown.querySelector(".dropdown-menu"); // Get the corresponding menu

    // Toggle the visibility of the dropdown menu
    dropdownMenu.classList.toggle("hidden");

    // Close other open dropdowns
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.add("hidden");
      }
    });
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", (event) => {
  dropdownTriggers.forEach((trigger) => {
    const parentDropdown = trigger.closest(".dropdown");
    const dropdownMenu = parentDropdown.querySelector(".dropdown-menu");

    if (!parentDropdown.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
