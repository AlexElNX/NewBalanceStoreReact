import styles from './Checkout.module.css'
import { Link }  from "react-router-dom";
import { getCart } from "../../utils/cartStorage.js";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsService.js";

function Checkout() {
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

    const cart = getCart();

    const cartProducts = cart.map(item => {
        const product = products.find(p => p.id === item.productId);

        return {
            ...item,
            product
        };
    });

    const subtotal = cartProducts.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
    }, 0);

    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
        <>

            <header className={styles.checkoutHeader}>
                <div className={styles.headerInner}>
                    <div className={styles.brand}>
                        <Link to="/">
                            <img src="../src/assets/icons/footer/logo.svg" alt="NB Logo"/>
                        </Link>
                        <span>Secure checkout</span>
                    </div>
                    <div className={styles.cart}>
                        <Link to="/cart">
                            <img src="../src/assets/icons/header/cart.svg" alt=""/>
                        </Link>
                    </div>
                </div>
            </header>

            <div className={styles.checkoutWrapper}>

                <div className={styles.breadcrumbs}>
                    <span>Shipping info</span>
                    <span>Payment</span>
                    <span>Review and buy</span>
                </div>

                <div className={styles.checkoutGrid}>

                    <div className="checkout-main">

                        {/*Contact Section*/}
                        <section className={`${styles.section} ${styles.contactSection}`}>
                            <h2>Contact</h2>
                            <div className={styles.row}>
                                <input id="email" type="email" placeholder="Email"/>
                                <input id="phone" type="tel" placeholder="Phone number"/>
                            </div>
                            <label className={styles.newsletter}>
                                <input type="checkbox"/> Sign up for email to hear about product launches, exclusive
                                offers and athlete news. By subscribing, I am agreeing to the New Balance <a href="#">Privacy
                                Policy</a> and <a href="#">Terms & Conditions</a>.
                            </label>
                        </section>

                        <section className={`${styles.section} ${styles.shippingSection}`}>
                            <h2>Shipping address</h2>
                            <div className={styles.row}>
                                <input id="first-name" type="text" placeholder="First Name"/>
                                <input id="last-name" type="text" placeholder="Last Name"/>
                            </div>
                            <input id="address" type="text" placeholder="Street Address"/>
                        </section>

                        <button className={styles.continueBtn}>Continue to Payment</button>

                    </div>

                    {/*Summary Section*/}
                    <aside className={styles.summary}>
                        <h2>Order Summary</h2>

                        <p className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </p>

                        <p className={styles.summaryRow}>
                            <span>Shipping: Standard</span>
                            <span>FREE</span>
                        </p>

                        <p className={styles.summaryRow}>
                            <span>Total Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </p>

                        <p className={`${styles.section} ${styles.orderTotal}`}>
                            <span>Order Total </span>
                            <span>${total.toFixed(2)}</span>
                        </p>
                        <div className={styles.checkoutProducts}>
                            {cartProducts.map(item => (
                                <div
                                    key={`${item.product.id}-${item.color}-${item.size}`}
                                    className={styles.checkoutProduct}
                                >
                                    <img
                                        className={styles.checkoutProductImage}
                                        src={item.product.images[item.color][0]}
                                        alt={item.product.name}
                                    />

                                    <div className={styles.checkoutProductInfo}>

                                        <h4>{item.product.name}</h4>

                                        <p>{item.product.gender}</p>

                                        <p>Color: {item.color}</p>

                                        <p>Size: {item.size}</p>

                                        <p>Qty: {item.quantity}</p>

                                        <p className={styles.checkoutProductPrice}>
                                            $
                                            {(item.product.price * item.quantity).toFixed(2)}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                </div>
            </div>

        </>
    )
}

export default Checkout
