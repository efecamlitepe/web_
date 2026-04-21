window.addEventListener("load", () => {
  const heartWrap = document.querySelector(".heart-wrap");
  if (!heartWrap) return;

  // Keep the final size after the opening animation.
  window.setTimeout(() => {
    heartWrap.classList.remove("is-loading");
  }, 1600);
});
