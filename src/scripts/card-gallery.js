let businessAndServices = [
    {
      "imageUrls": [
        "https://storage.googleapis.com/kidslikev2_bucket/07f526f8-4cbe-4d47-8b3a-ffd3cdc3e150.jpeg"
      ],
      "_id": "5fd076b7deae5f0017e41a7d",
      "title": "Red Shirt",
      "description": "New red shirt, made from cotton",
      "category": "business and services",
      "price": 255,
      "phone": "+380000000000",
      "isOnSale": false,
      "userId": "5fcf371a2d55d90017ae3391",
      "__v": 0
    },
    {
      "imageUrls": [
        "https://storage.googleapis.com/kidslikev2_bucket/e923976c-0c7a-44a8-ac50-fbbf88eec7b9.jpeg"
      ],
      "_id": "5fd077bbdeae5f0017e41a7f",
      "title": "Pink watermelon",
      "description": "New red shirt, made from cotton",
      "category": "business and services",
      "price": 255,
      "phone": "+380000000000",
      "isOnSale": false,
      "userId": "5fcf371a2d55d90017ae3391",
      "__v": 0
    },
    {
      "imageUrls": [],
      "_id": "5fd1e90c9c9717001727e5a2",
      "title": "Red Shirt111",
      "description": "New red shirt, made from cotton",
      "category": "business and services",
      "phone": "+380000000000",
      "price": 200,
      "isOnSale": false,
      "userId": "5fd1d6cd47778700170d7f2e",
      "__v": 0
    },
    {
      "imageUrls": [
        "https://storage.googleapis.com/kidslikev2_bucket/de534da8-209b-4d14-9d70-473db881b8aa.jpeg"
      ],
      "_id": "5fd200dc31ecc50017ba7494",
      "title": "Pink watermelon444",
      "description": "New red shirt, made from cotton",
      "category": "business and services",
      "price": 255,
      "phone": "+380005000000",
      "isOnSale": false,
      "userId": "5fd1d6cd47778700170d7f2e",
      "__v": 0
    },
    {
      "imageUrls": [
        "https://storage.googleapis.com/kidslikev2_bucket/1798bb23-aab7-4b24-9741-529d03356339.jpeg"
      ],
      "_id": "5fd367626da6ab0017dbf38b",
      "title": "Red Shirt1112",
      "description": "New red shirt, made from cotton",
      "category": "business and services",
      "phone": "+380000000000",
      "price": 200,
      "isOnSale": false,
      "userId": "5fcf34b02d55d90017ae338f",
      "__v": 0
    }
  ];



import templatesCadrGallery from '../templates/cardGallery.hbs';
import { addSlider } from './slider.js';

import { BASE_URL } from '../constans'

const cardGallaryMarkup = document.querySelector('.gallery');

function cardGalleryMarcup() {
  const markup = templatesCadrGallery(businessAndServices);
  cardGallaryMarkup.insertAdjacentHTML('beforeend', markup);    
}

function fetchCountryByName() { 

  return fetch(`${BASE_URL}/call/?page=1`)
    .then(response => {
      return response.json();
    }).then(({ businessAndServices }) => { return businessAndServices});
};

fetchCountryByName().then((res) => { 
  cardGalleryMarcup(res);
  addSlider();
});

