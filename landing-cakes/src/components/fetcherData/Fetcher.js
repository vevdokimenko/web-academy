export const fetchData = (evt, url, elementId) => {
  const el = document.getElementById(elementId);
  el.classList.remove("hide");
  setTimeout(() => {
    el.classList.add("hide");
  }, 1500);

  evt.preventDefault();

  const data = new FormData(evt.target);
  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      this.onSuccessCallback(data);
    })
    .catch((e) => {
      console.error(e);
    });
};
