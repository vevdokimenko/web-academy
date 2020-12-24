import {createAdList} from './adsList.js';

const createGrid = (root = document.querySelector('body')) => {
    fetch('https://boring-fe.herokuapp.com/advertisments')
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            createAdList(root, data);
        })
        .catch((e) => {
            console.error(e);
        });
};

export {createGrid};
