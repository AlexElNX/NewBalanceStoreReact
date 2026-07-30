import { Product } from "../entities/Product.js";

export const products = [

    new Product(
        1,
        "9060",
        159.99,
        199.99,
        "Unisex",
        "Footwear",
        "Shoes",
        "Lifestyle",
        "Lifestyle shoes",
        {
            white: [
                "../src/assets/images/products/9060/white/9060-white1.jpg",
                "../src/assets/images/products/9060/white/9060-white2.jpg",
                "../src/assets/images/products/9060/white/9060-white3.jpg",
                "../src/assets/images/products/9060/white/9060-white4.jpg",
                "../src/assets/images/products/9060/white/9060-white5.jpg",
                "../src/assets/images/products/9060/white/9060-white6.jpg",
                "../src/assets/images/products/9060/white/9060-white7.jpg",
                "../src/assets/images/products/9060/white/9060-white8.jpg",
                "../src/assets/images/products/9060/white/9060-white9.jpg"
            ],
            black: [
                "../src/assets/images/products/9060/black/9060-black1.jpg",
                "../src/assets/images/products/9060/black/9060-black2.jpg"
            ],
            gray: [
                "../src/assets/images/products/9060/gray/9060-gray1.jpg",
                "../src/assets/images/products/9060/gray/9060-gray2.jpg"
            ],
            tan: [
                "../src/assets/images/products/9060/tan/9060-tan1.jpg",
                "../src/assets/images/products/9060/tan/9060-tan2.jpg"
            ]
        },

        ["white", "black", "gray", "tan"],
        [7, 7.5, 8, 8.5, 9, 9.5],
        false,
        true,
        true
    ),

    new Product(
        2,
        "2002R",
        149.99,
        null,
        "Unisex",
        "Footwear",
        "Shoes",
        "Lifestyle",
        "Lifestyle shoes",
        {
            white: [
                "../src/assets/images/products/2002R/white/2002R-White.jpg"
            ],
            black: [
                "../src/assets/images/products/2002R/black/2002R-Black.jpg"
            ],
            gray: [
                "../src/assets/images/products/2002R/gray/2002R-Gray.jpg"
            ]
        },
        ["white", "black", "gray"],
        [7, 7.5, 8, 8.5, 9, 9.5],
        true
    ),

    new Product(
        3,
        "530",
        109.99,
        null,
        "Unisex",
        "Footwear",
        "Shoes",
        "Lifestyle",
        "Lifestyle shoes",
        {
            white: [
                "../src/assets/images/products/530/white-1/530-White1.jpg"
            ],
            white2: [
                "../src/assets/images/products/530/white-2/530-White1.jpg"
            ],
            black: [
                "../src/assets/images/products/530/black/530-Black.jpg"
            ],
            black_and_white: [
                "../src/assets/images/products/530/black-and-white/530-Black-And-White.jpg"
            ],
            gray: [
                "../src/assets/images/products/530/gray/530-Gray.jpg"
            ],
            tan: [
                "../src/assets/images/products/530/tan/530-Tan.jpg"
            ],
            pink: [
                "../src/assets/images/products/530/pink/530-Pink.jpg"
            ]
        },

        ["white", "white2", "black", "pink", "gray", "black", "tan"],
        [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
    ),

    new Product(
        4,
        "Soccer T-Shirt",
        39.99,
        null,
        "Men",
        "Clothing",
        "Shirts",
        "Soccer",
        "Soccer T-Shirt",
        {
            white: [
                "../src/assets/images/products/Soccer-Shirt/white/soccer-shirt-white1.jpg",
                "../src/assets/images/products/Soccer-Shirt/white/soccer-shirt-white2.jpg"
            ],
            red: [
                "../src/assets/images/products/Soccer-Shirt/red/soccer-shirt-red1.jpg",
                "../src/assets/images/products/Soccer-Shirt/red/soccer-shirt-red2.jpg"
            ],
            black: [
                "../src/assets/images/products/Soccer-Shirt/black/soccer-shirt-black1.jpg",
                "../src/assets/images/products/Soccer-Shirt/black/soccer-shirt-black2.jpg"
            ]
        },

        ["white", "red", "black"],
        ["XS", "S", "M", "L"],
    ),

    new Product(
        5,
        "Klutch Crew 2 Pack",
        19.99,
        null,
        "Unisex",
        "Accessories",
        "Socks",
        "",
        "Klutch Crew 2 Pack",
        {
            multi_color: [
                "../src/assets/images/products/Klutch-Crew-2-Pack/Klutch-Crew-2-Pack-1.jpg",
                "../src/assets/images/products/Klutch-Crew-2-Pack/Klutch-Crew-2-Pack-2.jpg",
                "../src/assets/images/products/Klutch-Crew-2-Pack/Klutch-Crew-2-Pack-3.jpg"
            ]
        },

        ["multi_color"],
        ["S", "M", "L", "XL"],
    ),

    new Product(
        6,
        "Klutch Athletics French Terry Crew",
        79.99,
        null,
        "Women",
        "Clothing",
        "Hoodies & Sweatshirts",
        "Training",
        "Klutch Athletics French Terry Crew",
        {
            pink: [
                "../src/assets/images/products/Klutch-Athletics-French-Terry-Crew/pink/Klutch-Athletics-French-Terry-Crew-Pink1.jpg",
                "../src/assets/images/products/Klutch-Athletics-French-Terry-Crew/pink/Klutch-Athletics-French-Terry-Crew-Pink2.jpg"
            ],
            gray: [
                "../src/assets/images/products/Klutch-Athletics-French-Terry-Crew/gray/Klutch-Athletics-French-Terry-Crew-Gray1.jpg",
                "../src/assets/images/products/Klutch-Athletics-French-Terry-Crew/gray/Klutch-Athletics-French-Terry-Crew-Gray2.jpg"
            ]
        },

        ["pink", "gray"],
        ["XS", "S", "M", "L", "XL", "2XL"],
    )

];




