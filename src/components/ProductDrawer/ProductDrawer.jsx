import styles from './ProductDrawer.module.css'
import { useState } from "react";
import { addToCart } from "../../utils/cartStorage.js";

function ProductDrawer({product, activeColor, onClose, onAddedToCart}) {
    if (!product) return null;

    const [selectedColor, setSelectedColor] = useState(activeColor);
    const [selectedSize, setSelectedSize] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);

    const images = product.images[selectedColor];


    const allSizes =
        product.type === "Footwear"
            ? [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]
            : ["XS","S","M","L","XL","2XL"];

    const [sizeError, setSizeError] = useState(false);
    const handleAddToCart = () => {

        if (!selectedSize) {
            setSizeError(true);

            setTimeout(() => {
                setSizeError(false);
            }, 2000);

            return;
        }

        addToCart(
            product,
            selectedColor,
            selectedSize
        );
        onAddedToCart();
        onClose();
    };
    return (
        <>
            <div onClick={onClose}
                 className={styles.productDrawerOverlay}>
            </div>

            <aside className={styles.productDrawer}>
                <button onClick={onClose}
                        className={styles.drawerClose}>
                    ✕
                </button>

                <div className={styles.drawerGallery}>
                    <img src={images[imageIndex]} />

                    {images.map((img, index) => (
                        <img
                            key={img}
                            src={img}
                            onClick={() => setImageIndex(index)}
                        />
                    ))}
                </div>

                <div className={styles.drawerInfo}>
                    <h2 className={styles.drawerName}>{product.name}</h2>

                    <div className={styles.drawerPrice}>
                        <span className={styles.currentPrice}>${product.price}</span>

                        {product.oldPrice && (
                            <span className={styles.oldPrice}>${product.oldPrice}</span>
                        )}
                    </div>

                    <div className={styles.drawerColors}>
                        {Object.keys(product.images).map(color => (
                            <button
                                key={color}
                                onClick={() => {
                                    setSelectedColor(color);
                                    setImageIndex(0);
                                }}
                                className={`
                                    ${styles.drawerColor}
                                    ${color === selectedColor ? styles.active : ""}
                                `}
                            >
                            <img src={product.images[color][0]} />
                            </button>
                        ))}
                    </div>

                    <div className={styles.drawerSizes}>
                        {allSizes.map(size => {
                            const available =
                                product.sizes.includes(size);

                            return (

                                <button
                                    key={size}
                                    disabled={!available}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setSizeError(false);
                                    }}
                                    className={`
                                        ${styles.drawerSize}
                                        ${size === selectedSize ? styles.active : ""}
                                    `}
                                >
                                    {size}
                                </button>
                            );
                        })}
                    </div>

                    {sizeError && (
                        <div className={styles.sizeError}>
                            Please select a size
                        </div>
                    )}


                    <button onClick={handleAddToCart}
                            className={styles.drawerAddToCart}
                    >
                        Add to Bag
                    </button>
                </div>
            </aside>
        </>
    )
}

export default ProductDrawer
