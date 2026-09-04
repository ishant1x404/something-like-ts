document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".mobile-toggle");
  const sidebar = document.querySelector(".sidebar");
  if (button && sidebar) {
    button.addEventListener("click", () => sidebar.classList.toggle("open"));
  }
});
