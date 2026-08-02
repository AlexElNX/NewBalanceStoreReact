import styles from './CartItems.module.css';
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productsService.js";

function CartItems({cart, setCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            setProducts(await getProducts());
        }

        loadProducts();
    }, []);

    if (!products.length) {
        return <p>Loading...</p>;
    }

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

            { cartProducts.length === 0 ? (
                    <div className={styles.emptyCart}>
                        <h3>Your bag is empty</h3>

                        <p>There are no items in your bag.</p>

                        <Link
                            to="/products"
                            className={styles.continueBtn}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (cartProducts.map(item => (
                    <CartItem
                    key={`${item.product.id}-${item.color}-${item.size}`}
                    cartProduct={item}
                    setCart={setCart}
                />
                ))
            )}

        </div>
    );
}

export default CartItems
