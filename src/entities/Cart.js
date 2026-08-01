export class Cart {
  products;
  deliveryPrice;

  constructor(products = [], deliveryPrice = 0) {
    this.products = products;
    this.deliveryPrice = deliveryPrice;
  }

  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(productId, color, size) {
    this.products = this.products.filter(
      item => !(
        item.product.id === productId &&
        item.color === color &&
        item.size === size
      )
    );
  }

  getTotalPrice() {
    return this.products.reduce(
      (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
      0
    );
  }
}
