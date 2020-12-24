import { createAd } from './ad.js';

const createAdList = (root, ads) => {
  const container = document.createElement('div');
  container.classList.add('grid');

  let adsHtmlStrings = '';
  ads.forEach((item) => {
    const html = createAd(item);
    adsHtmlStrings += html;
  });
  container.insertAdjacentHTML('beforeend', adsHtmlStrings);
  root.append(container);
};

export { createAdList };
