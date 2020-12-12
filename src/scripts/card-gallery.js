import templatesCadrGallery from '../templates/cardGallery.hbs';
import { addSlider } from './slider.js';

import { BASE_URL } from '../constans'

const cardGallaryMarkup = document.querySelector('.gallery');

function cardGalleryMarcup() {
  const markup = templatesCadrGallery();
  cardGallaryMarkup.insertAdjacentHTML('beforeend', markup);    
}
// cardGalleryMarcup();


function fetchCountryByName() { 

  return fetch(`${BASE_URL}/call/?page=1`)
    .then(response => {
      return response.json();
    }).then(({ businessAndServices }) => { return businessAndServices});
};

fetchCountryByName().then((res) => { 
  // console.log(res);
  cardGalleryMarcup(res);
  addSlider();
});


// function rendercategory(image) {
//     const markup = categoryCard(image);
//     currBit.insertAdjacentHTML('beforeend', markup);
    
// };

//  function loadImages() { 
//     return fetchCountryByName()
//         .then(rendercategory);
        
    
// };