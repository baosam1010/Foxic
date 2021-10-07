import productLink10 from './../assets/images/product-01-1.webp';
import productLink11 from './../assets/images/product-01-2.webp';
import productLink12 from './../assets/images/product-01-3.webp';
import productLink13 from './../assets/images/product-01-color-2.webp';

import productLink20 from './../assets/images/product-02-1.webp';
import productLink21 from './../assets/images/product-02-2.webp';
import productLink22 from './../assets/images/product-02-3.webp';
import productLink23 from './../assets/images/product-02-color-2.webp';
import productLink24 from './../assets/images/product-02-color-3.webp';


import productLink30 from './../assets/images/product-03-1.webp';
import productLink31 from './../assets/images/product-03-2.webp';
import productLink32 from './../assets/images/product-03-3.webp';

import productLink40 from './../assets/images/product-04-1.webp';
import productLink41 from './../assets/images/product-04-2.webp';
import productLink42 from './../assets/images/product-04-3.webp';

import productLink60 from './../assets/images/product-06-1.webp';
// import productLink61 from './../assets/images/product-06-2.webp';
import productLink62 from './../assets/images/product-06-3.webp';
// import productLink63 from './../assets/images/product-06-color-2.webp';
// import productLink64 from './../assets/images/product-06-color-3.webp';

import productLink100 from './../assets/images/product-10-1.webp';

import productLink130 from './../assets/images/product-13-1.webp';

import productLink160 from './../assets/images/product-16-1.webp';
import productLink161 from './../assets/images/product-16-2.webp';
import productLink162 from './../assets/images/product-16-3.webp';
// import productLink163 from './../assets/images/product-16-color-2.webp';


import productLink210 from './../assets/images/product-21-1.webp';
import productLink211 from './../assets/images/product-21-2.webp';

import productLink250 from './../assets/images/product-25-1.webp';
import productLink251 from './../assets/images/product-25-2.webp';
import productLink252 from './../assets/images/product-25-3.webp';



// import * as Types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('PRODUCTS'))
var initialState = data ? data : [
    {
        productsList: [
            {
                id: 1,
                linkProduct: [
                    productLink10,
                    productLink11,
                    productLink12,

                ],
                linkProductColor: [
                    productLink10,
                    productLink13,

                ],
                color: [
                    'bg-yellow-400',
                    'bg-black',
                ],
                brand: 'Foxic',
                name: 'Leather Pegged Pants',
                price: 180,
                oldPrice: '',
                discount: 10,
                status: 'new',
            },
            {
                id: 2,
                linkProduct: [
                    productLink20,
                    productLink21,
                    productLink22,
                ],
                linkProductColor: [
                    productLink20,
                    productLink23,
                    productLink24,
                ],
                color: [
                    'bg-red-500',
                    'bg-red-400',
                    'bg-yellow-300',
                ],
                brand: 'Iconic',
                name: 'Oversize Cotton Dress',
                price: 120,
                oldPrice: 200,
                discount: '',
                status: '',
            },
            {
                id: 3,
                linkProduct: [
                    productLink30,
                    productLink31,
                    productLink32,
                ],
                linkProductColor: [],
                color: [],
                brand: 'Banita',
                name: 'Oversized Cotton Blouse',
                price: 180,
                oldPrice: 200,
                discount: 10,
                status: '',
            },
            {
                id: 4,
                linkProduct: [
                    productLink40,
                    productLink41,
                    productLink42,
                ],
                linkProductColor: [],
                color: [],
                brand: 'BigSteps',
                name: 'Suede Leather Mini Skirt',
                price: 100,
                oldPrice: '',
                discount: '',
                status: 'new',
            },
        ],
        ProductArrival :[
            {
                id: 1,
                linkProduct: [
                    productLink30,
                    productLink31,
                    productLink32,
                ],
                linkProductColor: [
                ],
                color: [
        
                ],
                brand: 'Banita',
                name: 'Oversized Cotton Blouse',
                price: 180,
                oldPrice: 200,
                discount: 10,
                status: 'new',
            },
            {
                id: 2,
                linkProduct: [
                    productLink60,
                    // productLink61,
                    productLink62,
                ],
                linkProductColor: [
        
                ],
                color: [
                    'bg-gray-400',
                    'bg-green-400',
                    'bg-black',
                ],
                brand: 'Foxic',
                name: 'Midi Dress with Belt',
                price: 180,
                oldPrice: 190,
                discount: '',
                status: '',
            },
            {
                id: 3,
                linkProduct: [
                    productLink100,

                ],
                linkProductColor: [
                    productLink100,

                ],
                color: [
                    'bg-blue-400',
                ],
                brand: 'Banita',
                name: 'Short Sleeve Blouse',
                price: 180,
                oldPrice: '',
                discount: 10,
                status: '',
            },
            {
                id: 4,
                linkProduct: [
                    productLink130,
                ],
                linkProductColor: [],
                color: [],
                brand: 'Banita',
                name: 'Peg Cropped Cuffed Pants',
                price: 180,
                oldPrice: 200,
                discount: '',
                status: 'new',
            },
            {
                id: 5,
                linkProduct: [
                    productLink160,
                    productLink161,
                    productLink162,
                ],
                linkProductColor: [
                    // productLink160,
                    // productLink163,
                    // 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-16-color-3.webp',
                ],
                color: [
                    'bg-blue-400',
                    'bg-green-400',
                    'bg-red-700',
                ],
                brand: 'Banita',
                name: 'Cascade Casual Shirt',
                price: 180,
                oldPrice: '',
                discount: '',
                status: '',
            },
            {
                id: 6,
                linkProduct: [
                    productLink40,
                    productLink41,
                    productLink42,
                ],
                linkProductColor: [
                ],
                color: [
        
                ],
                brand: 'Banita',
                name: 'Suede Leather Mini Skirt',
                price: 180,
                oldPrice: '',
                discount: '',
                status: 'new',
            },
            {
                id: 7,
                linkProduct: [
                    productLink210,
                    productLink211,
                    productLink210,
        
                ],
                linkProductColor: [
                    productLink210,
                    productLink211,
                ],
                color: [
                    'bg-blue-400',
                    'bg-red-400',
                ],
                brand: 'Banita',
                name: 'Genuine Leather Strap Watch',
                price: 180,
                oldPrice: 250,
                discount: 10,
                status: '',
            },
            {
                id: 8,
                linkProduct: [
                    productLink250,
                    productLink251,
                    productLink252,
                ],
                linkProductColor: [
                ],
                color: [
        
                ],
                brand: 'Banita',
                name: 'Fashion Waist Bag',
                price: 180,
                oldPrice: '',
                discount: '',
                status: '',
            },
        ]
    },
];

const Products = (state = initialState, action) => {

    // switch (action.type) {
    //     case Types.ADD_TO_Products:

    //         return [...state];

    //     default: return [...state];
    // }
    return [...state];
}

export default Products;



