import { useRef } from "react";
import styles from "./ManageProducts.module.css";
import TopHeader from "../../../components/TopHeader/TopHeader.jsx";
import MainHeader from "../../../components/MainHeader/MainHeader.jsx";
import Footer from "../../../components/Footer/Footer.jsx";


function ManageProducts() {
    const pageRef = useRef(null);

    return (
        <>
            <TopHeader />
            <section ref={pageRef} className={`${styles.manageProducts} ${styles.hero}`}>
                <MainHeader theme={"light"} containerRef={pageRef} />
            </section>

            <Footer />
        </>
    );
}

export default ManageProducts;