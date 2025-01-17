const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const parentDropdown = trigger.closest(".dropdown"); // Find the parent .dropdown
    const dropdownMenu = parentDropdown.querySelector(".dropdown-menu"); // Get the corresponding menu

    dropdownMenu.classList.toggle("hidden");

    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.add("hidden");
      }
    });
  });
});

document.addEventListener("click", (event) => {
  dropdownTriggers.forEach((trigger) => {
    const parentDropdown = trigger.closest(".dropdown");
    const dropdownMenu = parentDropdown.querySelector(".dropdown-menu");

    if (!parentDropdown.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
