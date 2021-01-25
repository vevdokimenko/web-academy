export const fetchData = (evt, url, el) => {
  el.classList.add("show");
  setTimeout(() => {
    el.classList.remove("show");
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
