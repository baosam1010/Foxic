import * as Types from './../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('PRODUCTS'))
var initialState = data ? data : [
    // {
    //     productsList: [
    //         {
    //             id: 1,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-3.webp"

    //             ],
    //             linkProductColor: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-color-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-color-3.webp"


    //             ],
    //             color: [
    //                 "bg-yellow-400",
    //                 "bg-black",
    //                 "bg-red-600"

    //             ],
    //             brand: 'Foxic',
    //             name: 'Leather Pegged Pants',
    //             price: 180,
    //             oldPrice: '',
    //             discount: 10,
    //             status: 'new',
    //         },
    //         {
    //             id: 2,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-02-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-02-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-02-3.webp"

    //             ],
    //             linkProductColor: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-02-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-02-color-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-02-color-3.webp"
                     
                   
    //             ],
    //             color: [
    //                 "bg-red-500",
    //                 "bg-red-400",
    //                 "bg-yellow-300"
    //             ],
    //             brand: 'Iconic',
    //             name: 'Oversize Cotton Dress',
    //             price: 120,
    //             oldPrice: 200,
    //             discount: '',
    //             status: '',
    //         },
    //         {
    //             id: 3,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-3.webp"
    //             ],
    //             linkProductColor: [],
    //             color: [],
    //             brand: "Banita",
    //             name: 'Oversized Cotton Blouse',
    //             price: 180,
    //             oldPrice: 200,
    //             discount: 10,
    //             status: '',
    //         },
    //         {
    //             id: 4,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-04-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-04-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-04-3.webp"
    //             ],
    //             linkProductColor: [],
    //             color: [],
    //             brand: 'BigSteps',
    //             name: 'Suede Leather Mini Skirt',
    //             price: 100,
    //             oldPrice: '',
    //             discount: '',
    //             status: 'new',
    //         },
    //     ],
    //     ProductArrival :[
    //         {
    //             id: 5,
    //             linkProduct: [
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp',
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-2.webp',
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-3.webp',
    //             ],
    //             linkProductColor: [
    //             ],
    //             color: [
        
    //             ],
    //             brand: 'Banita',
    //             name: 'Oversized Cotton Blouse',
    //             price: 180,
    //             oldPrice: 200,
    //             discount: 10,
    //             status: 'new',
    //         },
    //         {
    //             id: 6,
    //             linkProduct: [
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-06-1.webp',
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-06-2.webp',
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-06-3.webp',
    //             ],
    //             linkProductColor: [
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-06-1.webp',
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-06-color-2.webp',
    //                 'https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-06-color-3.webp',
                    
    //             ],
    //             color: [
    //                 "bg-gray-400",
    //                 "bg-green-400",
    //                 "bg-black"
    //             ],
    //             brand: 'Foxic',
    //             name: 'Midi Dress with Belt',
    //             price: 180,
    //             oldPrice: 190,
    //             discount: '',
    //             status: '',
    //         },
    //         {
    //             id: 7,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-10-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-10-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-10-3.webp"

    //             ],
    //             linkProductColor: [

    //               ],
    //             color: [
                  
    //             ],
    //             brand: 'Banita',
    //             name: 'Short Sleeve Blouse',
    //             price: 180,
    //             oldPrice: '',
    //             discount: 10,
    //             status: '',
    //         },
    //         {
    //             id: 8,
    //             linkProduct: [
    //                "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-13-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-13-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-13-3.webp"
    //             ],
    //             linkProductColor: [],
    //             color: [],
    //             brand: 'Banita',
    //             name: 'Peg Cropped Cuffed Pants',
    //             price: 180,
    //             oldPrice: 200,
    //             discount: '',
    //             status: 'new',
    //         },
    //         {
    //             id: 9,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-16-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-16-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-16-3.webp"
    //             ],
    //             linkProductColor: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-16-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-16-color-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-16-color-3.webp"
    //             ],
    //             color: [
    //                 "bg-blue-400",
    //                 "bg-green-400",
    //                 "bg-red-700"
    //             ],
    //             brand: 'Banita',
    //             name: 'Cascade Casual Shirt',
    //             price: 180,
    //             oldPrice: '',
    //             discount: '',
    //             status: '',
    //         },
    //         {
    //             id: 10,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-18-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-18-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-18-3.webp"
    //             ],
    //             linkProductColor: [
    //             ],
    //             color: [
        
    //             ],
    //             brand: 'Foxic',
    //             name: 'Sport Cotton T-shirt',
    //             price: 180,
    //             oldPrice: '',
    //             discount: '',
    //             status: 'new',
    //         },
    //         {
    //             id: 11,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-21-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-21-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-21-3.webp"
        
    //             ],
    //             linkProductColor: [
    //             ],
    //             color: [
    //             ],
    //             "brand": "Banita",
    //             name: 'Genuine Leather Strap Watch',
    //             price: 180,
    //             "oldPrice": "350", "brand": "Banita",
    //             discount: 10,
    //             status: '',
    //         },
    //         {
    //             id: 12,
    //             linkProduct: [
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-25-1.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-25-2.webp",
    //                 "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-25-3.webp"
    //             ],
    //             linkProductColor: [
    //             ],
    //             color: [
        
    //             ],
    //             brand: 'Banita',
    //             name: 'Fashion Waist Bag',
    //             price: 180,
    //             oldPrice: '',
    //             discount: '',
    //             status: '',
    //         },
    //     ]
    // },
];

const Products = (state = initialState, action) => {

    switch (action.type) {
        case Types.GET_COLLECTION:
            state.push({productCollection:action.products});
            localStorage.setItem('PRODUCTS', JSON.stringify(state))
            return [...state];
            case Types.GET_ARRIVAL:
                state.push({productArrival:action.products})
                localStorage.setItem('PRODUCTS', JSON.stringify(state))
                return [...state];
        default: return [...state];
    }
    // return [...state];
}

export default Products;



