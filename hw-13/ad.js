const createAd = (arrItem) => {
  // const { id, media, title, price } = product;

  return `
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
      <div class="product-card" id="${arrItem.id}">
        <figure class="product-card__pic">
          <img
            class="product-card__img"
            src="${arrItem.img}"
            alt=""
          />
          <a href="${arrItem.productUrl}" class="product-card__quick-view">
            Quick view
          </a>
        </figure>
        <h2 class="product-card__title">${arrItem.title}</h2>
        <div class="product-card__description">${arrItem.description.slice(
          0,
          20
        )}</div>
        <div class="product-card__note">${arrItem.note}</div>
      </div>
    </div>
  `;
};

export { createAd };
