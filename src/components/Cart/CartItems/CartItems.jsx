import styles from './CartItems.module.css';
import { products } from "../../../data/productsData";
import CartItem from "../CartItem/CartItem";

function CartItems({cart, setCart}) {

    const cartProducts = cart.map(item => ({
        ...item,
        product: products.find(p => p.id === item.productId)
    }));

    const productCount = cartProducts.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <div className={styles.cartItems}>

            <div className={styles.cartHeader}>
                <h2>My Bag</h2>

                <span className={styles.cartItemCount}>
                    {productCount} {productCount === 1 ? "Item" : "Items"}
                </span>

            </div>

            {cartProducts.map(item => (
                <CartItem
                    key={`${item.product.id}-${item.color}-${item.size}`}
                    cartProduct={item}
                    setCart={setCart}
                />
            ))}

        </div>
    );
}

export default CartItems
