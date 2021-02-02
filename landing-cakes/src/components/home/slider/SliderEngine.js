export const sliderScroll = (sliderId, direction, images) => {
  const sliderWrapper = document.getElementById(sliderId);
  const countItems = images.length;
  const elHeight = sliderWrapper.offsetHeight;
  const elWidth = sliderWrapper.offsetWidth;
  const offsetPx = Math.floor(elWidth / elHeight) * (elHeight + 10);
  const sliderLeft = isNaN(parseInt(sliderWrapper.style.left))
    ? 0
    : parseInt(sliderWrapper.style.left);

  if (direction === "right") {
    if (-(sliderLeft - offsetPx) > (elHeight + 10) * countItems) return;
    sliderWrapper.style.left = String(sliderLeft - offsetPx) + "px";
  }

  if (direction === "left") {
    if (sliderLeft === 0) return;
    sliderWrapper.style.left = String(sliderLeft + offsetPx) + "px";
  }
};
