import styles from './Cart.module.css'
import TopHeader from "../../components/TopHeader/TopHeader.jsx";
import MainHeader from "../../components/MainHeader/MainHeader.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CartSummary from "../../components/Cart/CartSummary/CartSummary.jsx";
import CartItems from "../../components/Cart/CartItems/CartItems.jsx";
import { useRef, useState } from "react";
import { getCart } from "../../utils/cartStorage.js";
import RecentlyViewed from "../../components/Cart/RecentlyViewed/RecentlyViewed.jsx";


function Cart() {
    const [cart, setCart] = useState(getCart());
    const cartRef = useRef(null);
    return (
        <>
            <TopHeader />

            <section
                ref={cartRef}
                className={styles.cartHero}
            >
                <MainHeader theme={"light"} containerRef={cartRef}/>
            </section>


            <div className={styles.cartContainer}>
                <CartItems
                    cart={cart}
                    setCart={setCart}
                />

                <CartSummary
                    cart={cart}
                />
            </div>

            <RecentlyViewed />

            <Footer />
        </>
    )
}

export default Cart
