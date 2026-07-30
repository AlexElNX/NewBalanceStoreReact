import styles from './RecentlyViewed.module.css';
import { getRecentlyViewed } from "../../../utils/recentlyViewed.js";
import ProductCard from "../../ProductCard/ProductCard.jsx";
import { products } from "../../../data/productsData.js";


function RecentlyViewed() {

    const ids = getRecentlyViewed();

    const recentProducts = ids
        .map(id => products.find(product => product.id === id))
        .filter(Boolean);

    if (recentProducts.length === 0) {
        return null;
    }

    return (
        <section className={styles.recentlyViewedSection}>
            <h2>Recently viewed</h2>

            <div className={styles.recentlyViewedGrid}>
                {recentProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        page="cart"
                    />
                ))}
            </div>
        </section>
    );
}

export default RecentlyViewed;