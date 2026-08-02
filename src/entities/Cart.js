export class Cart {
  products;
  deliveryPrice;

  constructor(products = [], deliveryPrice = 0) {
    this.products = products;
    this.deliveryPrice = deliveryPrice;
  }

  addProduct(product, color, size) {
    const existingItem = this.products.find(item =>
        item.productId === product.id &&
        item.color === color &&
        item.size === size
    );

    if (existingItem) {
      ++existingItem.quantity;
    }
    else {
      this.products.push({
        productId: product.id,
        color,
        size,
        quantity: 1
      });
    }
  }

  updateQuantity(productId, color, size, quantity) {
    const item = this.products.find(item =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
    );

    if (item) {
      item.quantity = quantity;
    }
  }

  removeProduct(productId, color, size) {
    this.products = this.products.filter(item =>
        !(
            item.productId === productId &&
            item.color === color &&
            item.size === size
        )
    );
  }

  getItems(products) {
    return this.products.map(item => ({
      ...item,
      product: products.find(p => p.id === item.productId)
    }));
  }

  getSubtotal(products) {
    return this.getItems(products).reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
  }

  getProductCount() {
    return this.products.reduce(
        (sum, item) => sum + item.quantity,
        0
    );
  }

  isEmpty() {
    return this.products.length === 0;
  }

  getTax(products) {
    return this.getSubtotal(products) * 0.08;
  }

  getTotal(products) {
    return this.getSubtotal(products) + this.getTax(products);
  }
}
