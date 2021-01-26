export const fetchData = (evt, url, formId, thnxId) => {
  const el = document.getElementById(thnxId);
  const form = document.getElementById(formId);

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
  form.reset();
};
