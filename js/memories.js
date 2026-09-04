document.addEventListener("DOMContentLoaded", () => {
  // The memories gallery is deliberately empty until real memories are added.
  const gallery = document.querySelector("[data-memory-gallery]");
  if (gallery) gallery.setAttribute("aria-label", "Empty memories gallery");
});
