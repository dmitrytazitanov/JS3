"use strict"
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
const productsPhotos = products.filter( photo => "photos" in photo && photo.photos.length > 0);
console.log(productsPhotos);

products.sort(function price(cost1, cost2) {
    return cost1.price - cost2.price;
});
console.log(products);