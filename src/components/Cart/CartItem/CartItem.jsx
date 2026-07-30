import styles from './CartItem.module.css'
import { updateCartQuantity, removeFromCart, getCart } from "../../../utils/cartStorage";

function CartItem({ cartProduct, setCart }) {
    const product = cartProduct.product;

    const colorMap = {
        white1: "White",
        white2: "White",
        black_and_white: "Black & White",
        black: "Black",
        gray: "Gray",
        tan: "Tan",
        green: "Green",
        blue: "Blue",
        purple: "Purple",
        pink: "Pink",
        red: "Red",
        multi_color: "Multi Color"
    };
    const color = cartProduct.color;

    const increaseQuantity = () => {
        if (cartProduct.quantity >= 5) return;

        updateCartQuantity(
            product.id,
            cartProduct.color,
            cartProduct.size,
            cartProduct.quantity + 1
        );

        setCart(getCart());
    };

    const qtyDecreaseClick = () => {
        if (cartProduct.quantity <= 1) return;

        updateCartQuantity(
            product.id,
            cartProduct.color,
            cartProduct.size,
            cartProduct.quantity - 1
        );

        setCart(getCart());
    };

    const removeClick = () => {


        removeFromCart(
            product.id,
            cartProduct.color,
            cartProduct.size
        );

        setCart(getCart());
    };

    return (
        <>
            <div className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                    <img
                        src={product.images[cartProduct.color][0]}
                        alt={product.name}
                    />
                </div>

                <div className={styles.cartItemInfo}>
                    <h3 className={styles.cartItemTitle}>{product.name}</h3>
                    <p className={styles.cartItemText}>{product.gender}</p>
                    <p className={styles.cartItemText}>Color: {colorMap[color] || color}</p>
                    <p className={styles.cartItemText}>Size: {cartProduct.size}</p>

                    <div className={styles.qtyRow}>
                        <button
                            onClick={qtyDecreaseClick}
                            className={styles.qtyBtn}>
                            -
                        </button>

                        <span>Qty: {cartProduct.quantity}</span>

                        <button
                            onClick={increaseQuantity}
                            className={styles.qtyBtn}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles.cartItemActions}>
                    <button
                        onClick={removeClick}
                        className={styles.removeBtn}
                    >
                        ×
                    </button>

                    <div className={styles.cartPrice}>
                        ${(cartProduct.product.price * cartProduct.quantity).toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
