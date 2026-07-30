// import { openProductDrawer } from "/js/productDrawer.js";

export class Product {
    id;
    images;
    name;
    oldPrice;
    price;
    sizes;
    colors;
    gender;
    type;
    category;
    activity;
    description;
    isNew;
    inStock;
    isSale;


    constructor(id = 0,
                name = "Unknown",
                price = 0,
                oldPrice = 0,
                gender = "Unknown",
                type = "Unknown",
                category = "Unknown",
                activity = "Unknown",
                description = "Unknown",
                images = {},
                colors = [],
                sizes = [],
                isNew = false,
                inStock = true,
                isSale = false
    ) {
        this.id = id;
        this.images = images;
        this.name = name;
        this.oldPrice = oldPrice;
        this.price = price;
        this.sizes = sizes;
        this.colors = colors;
        this.gender = gender;
        this.type = type;
        this.category = category;
        this.activity = activity;
        this.description = description;
        this.isNew = isNew;
        this.inStock = inStock;
        this.isSale = isSale;
    }
}
