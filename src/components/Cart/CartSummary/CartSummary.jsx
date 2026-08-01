import styles from './CartSummary.module.css'
import { useNavigate } from "react-router-dom";
import { products } from "../../../data/productsData.js";

function SummaryRow({ left, right }) {
    return (
        <div className={styles.summaryRow}>
            <span>{left}</span>
            <span>{right}</span>
        </div>
    )
}

function CartSummary({ cart }) {
    const cartProducts = cart.map(item => {
        const product = products.find(p => p.id === item.productId);

        return {
            ...item,
            product
        };
    });

    const subtotal = cartProducts.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    const navigate = useNavigate();
    const checkoutClick = () => {
        navigate("/checkout");
    }

    return (
        <>
            <div className={styles.cartSummary}>
                <aside>
                    <h3>Order Summary</h3>
                    <SummaryRow
                        left="Subtotal"
                        right={`$${subtotal.toFixed(2)}`}
                    />
                    <SummaryRow
                        left="Shipping: Standard"
                        right="FREE"
                    />
                    <SummaryRow
                        left="Sales tax"
                        right="Calculated at checkout"
                    />
                </aside>
                <div className={styles.summaryTotal}>
                    <span>Order total</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                <button className={styles.checkoutBtn} onClick={checkoutClick}>Checkout</button>
            </div>
        </>
    )
}

export default CartSummary