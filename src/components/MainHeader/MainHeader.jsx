import './MainHeader.css'
import { Link } from "react-router-dom";
import {useEffect, useRef} from "react";

function MainHeader({
                        theme = "dark",
                        containerRef
}) {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const container = containerRef.current;

        if (!header || !container) return;

        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll <= 70) {
                header.style.position = "absolute";
                header.style.width = "100%";
                header.style.left = "0";

                header.classList.remove("fixed", "hidden", "scrolled");
                lastScroll = 0;
                return;
            }

            header.style.position = "fixed";
            header.style.width = `${container.offsetWidth}px`;
            header.style.left = `${container.getBoundingClientRect().left}px`;

            header.classList.add("fixed", "scrolled");

            if (currentScroll > lastScroll) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [containerRef]);

    return (
        <>
            <header ref={headerRef} className={`main-header ${theme}`}>
                <div className="header-left">
                    <Link to="/">
                        <img className="logo" src="../src/assets/icons/header/logo.svg" alt="New Balance"/>
                    </Link>

                    <nav className="nav-menu">

                        <div className="nav-item has-dropdown">
                            <Link to={"/products?new=true"}>New</Link>

                            <div className="new-dropdown">

                                <a href="/NewBalanceShop/products.html?gender=men&new=true" className="new-card">
                                    <img src="../src/assets/images/new/mens-arrivals.jpg" alt=""/>
                                    <span>Men's new arrivals</span>
                                </a>

                                <a href="/NewBalanceShop/products.html?gender=women&new=true" className="new-card">
                                    <img src="../src/assets/images/new/womens-arrivals.jpg" alt=""/>
                                    <span>Women's new arrivals</span>
                                </a>

                                <a href="/NewBalanceShop/products.html?gender=kids&new=true" className="new-card">
                                    <img src="../src/assets/images/new/kids-arrivals.jpg" alt=""/>
                                    <span>Kids' new arrivals</span>
                                </a>

                                <a href="#" className="new-card">
                                    <img src="../src/assets/images/new/launch-calendar.jpg" alt=""/>
                                    <span>Launch calendar</span>
                                </a>

                                <a href="#" className="new-card">
                                    <img src="../src/assets/images/new/football-collection.jpg" alt=""/>
                                    <span>The international football collection</span>
                                </a>

                            </div>
                        </div>

                        <div className="nav-item has-dropdown">
                            <Link to={"/products?gender=men"}>Men</Link>

                            <div className="mega-menu">

                                <div className="mega-column featured">
                                    <Link to={"/products?gender=men&activity=soccer"}>Soccer</Link>
                                    <Link to={"/products?new=true"}>New Arrivals</Link>
                                    <a href="#">Top Styles</a>
                                    <a href="#">NB Lifestyle</a>
                                    <a href="#">Made in USA</a>
                                    <a href="#">Made in UK</a>
                                    <a href="#">Launch Calendar</a>
                                    <a href="#">Color Edit</a>
                                    <a href="#">Klutch Athletics</a>
                                    <a href="#">Reconsidered</a>
                                    <a href="/NewBalanceShop/products.html?sale=true">Sale</a>
                                </div>

                                <div className="mega-column">
                                    <h4>SHOES</h4>
                                    <Link to={"/products?gender=men&type=footwear&category=shoes"}>All Shoes</Link>
                                    <Link to={"/products?gender=men&type=footwear&activity=running"}>Running</Link>
                                    <Link to={"/products?gender=men&type=footwear&activity=lifestyle"}>Lifestyle</Link>
                                    <Link to={"/products?gender=men&type=footwear&activity=basketball"}>Basketball</Link>
                                    <Link to={"/products?gender=men&type=footwear&activity=football"}>Football</Link>
                                    <Link to={"/products?gender=men&type=footwear&activity=soccer"}>Soccer</Link>
                                    <Link to={"/products?gender=men&type=footwear&activity=tennis"}>Tennis</Link>
                                    <Link to={"/products?gender=men&type=footwear&activity=golf"}>Golf</Link>
                                </div>

                                <div className="mega-column">
                                    <h4>CLOTHING</h4>
                                    <Link to={"/products?gender=men&type=clothing"}>All Clothing</Link>
                                    <Link to={"/products?gender=men&type=clothing&category=shirts"}>Shirts</Link>
                                    <Link to={"/products?gender=men&type=clothing&category=shorts"}>Shorts</Link>
                                    <Link to={"/products?gender=men&type=clothing&category=pants"}>Pants</Link>
                                    <Link to={"/products?gender=men&type=clothing&category=hoodies%20%26%20sweatshirts"}>Hoodies & Sweatshirts</Link>
                                    <Link to={"/products?gender=men&type=clothing&category=jackets%20%26%20vests"}>Jackets & Vests</Link>
                                </div>

                                <div className="mega-column">
                                    <h4>SPORTS</h4>
                                    <Link to={"/products?gender=men&activity=soccer"}>Soccer</Link>
                                    <Link to={"/products?gender=men&activity=tennis"}>Tennis</Link>
                                    <Link to={"/products?gender=men&activity=running"}>Running</Link>
                                    <Link to={"/products?gender=men&activity=basketball"}>Basketball</Link>
                                    <Link to={"/products?gender=men&activity=football"}>Football</Link>
                                </div>

                                <div className="mega-column">
                                    <h4>ACCESSORIES</h4>
                                    <Link to={"/products?gender=men&type=accessories"}>All Accessories</Link>
                                    <Link to={"/products?gender=men&type=accessories&category=hats%20%26%20gloves"}>Hats & Gloves</Link>
                                    <Link to={"/products?gender=men&type=accessories&category=socks"}>Socks</Link>
                                    <Link to={"/products?gender=men&type=accessories&category=bags"}>Bags</Link>
                                </div>
                            </div>
                        </div>


                        <div className="nav-item has-dropdown">
                            <Link to={"/products?gender=women"}>Women</Link>

                            <div className="mega-menu">

                                <div className="mega-column featured">
                                    <a href="/NewBalanceShop/products.html?gender=women&activity=soccer">Soccer</a>
                                    <a href="/NewBalanceShop/products.html?new=true">New Arrivals</a>
                                    <a href="#">Top Styles</a>
                                    <a href="#">NB Lifestyle</a>
                                    <a href="#">Made in USA</a>
                                    <a href="#">Made in UK</a>
                                    <a href="#">Launch Calendar</a>
                                    <a href="#">Seasonal Lookbook</a>
                                    <a href="#">Color Edit</a>
                                    <a href="#">Klutch Athletics</a>
                                    <a href="#">Reconsidered</a>
                                    <a href="/NewBalanceShop/products.html?sale=true">Sale</a>
                                </div>

                                <div className="mega-column">
                                    <h4>SHOES</h4>
                                    <Link to={"/products?gender=women&type=footwear&category=shoes"}>All Shoes</Link>
                                    <Link to={"/products?gender=women&type=footwear&activity=running"}>Running</Link>
                                    <Link to={"/products?gender=women&type=footwear&activity=lifestyle"}>Lifestyle</Link>
                                    <Link to={"/products?gender=women&type=footwear&activity=basketball"}>Basketball</Link>
                                    <Link to={"/products?gender=women&type=footwear&activity=football"}>Football</Link>
                                    <Link to={"/products?gender=women&type=footwear&activity=soccer"}>Soccer</Link>
                                    <Link to={"/products?gender=women&type=footwear&activity=tennis"}>Tennis</Link>
                                    <Link to={"/products?gender=women&type=footwear&activity=golf"}>Golf</Link>
                                </div>

                                <div className="mega-column">
                                    <h4>CLOTHING</h4>
                                    <Link to={"/products?gender=women&type=clothing"}>All Clothing</Link>
                                    <Link to={"/products?gender=women&type=clothing&category=shirts"}>Shirts</Link>
                                    <Link to={"/products?gender=women&type=clothing&category=shorts"}>Shorts</Link>
                                    <Link to={"/products?gender=women&type=clothing&category=pants"}>Pants</Link>
                                    <Link to={"/products?gender=women&type=clothing&category=hoodies%20%26%20sweatshirts"}>Hoodies & Sweatshirts</Link>
                                    <Link to={"/products?gender=women&type=clothing&category=jackets%20%26%20vests"}>Jackets & Vests</Link>
                                </div>

                                <div className="mega-column">
                                    <h4>SPORTS</h4>
                                    <Link to={"/products?gender=women&activity=soccer"}>Soccer</Link>
                                    <Link to={"/products?gender=women&activity=tennis"}>Tennis</Link>
                                    <Link to={"/products?gender=women&activity=running"}>Running</Link>
                                    <Link to={"/products?gender=women&activity=basketball"}>Basketball</Link>
                                    <Link to={"/products?gender=women&activity=football"}>Football</Link>
                                </div>

                                <div className="mega-column">
                                    <h4>ACCESSORIES</h4>
                                    <Link to={"/products?gender=women&type=accessories"}>All Accessories</Link>
                                    <Link to={"/products?gender=women&type=accessories&category=hats%20%26%20gloves"}>Hats & Gloves</Link>
                                    <Link to={"/products?gender=women&type=accessories&category=socks"}>Socks</Link>
                                    <Link to={"/products?gender=women&type=accessories&category=bags"}>Bags</Link>
                                </div>

                            </div>
                        </div>

                        <div className="nav-item has-dropdown">
                            <Link to={"/products?gender=kids"}>Kids</Link>

                            <div className="mega-menu">

                                <div className="mega-column featured">
                                    <a href="#">Soccer</a>
                                    <a href="#">New Arrivals</a>
                                    <a href="#">School Uniform Shoes</a>
                                    <a href="#">Top Styles</a>
                                    <a href="#">Sibling Shop</a>
                                    <a href="#">Wide Shoes</a>
                                    <a href="#">Kid-friendly Closures</a>
                                    <a href="#"> Shoes under $75</a>
                                    <a href="#">Sale</a>
                                </div>

                                <div className="mega-column">
                                    <h4>SHOES</h4>

                                    <a href="#">All Shoes </a>
                                    <a href="#">Big Kids (Size 3.5 - 7)</a>
                                    <a href="#">Little Kids (Size 10.5 - 3)</a>
                                    <a href="#">Babies & Toddlers (Size 0 - 10)</a>
                                </div>

                                <div className="mega-column">
                                    <h4>CLOTHING</h4>

                                    <a href="#">All Clothing</a>
                                    <a href="#">Big Kids (Size 7Y - 16Y)</a>
                                    <a href="#"> Little Kids (Size 3Y - 6Y)</a>
                                    <a href="#">Babies & Toddlers (Size 12M - 3T)</a>
                                </div>

                                <div className="mega-column">
                                    <h4>SPORTS</h4>
                                    <a href="#">All Sports</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&activity=soccer">Soccer</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&activity=tennis">Tennis</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&activity=running">Running</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&activity=basketball">Basketball</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&activity=football">Football</a>
                                </div>

                                <div className="mega-column">
                                    <h4>ACCESSORIES</h4>

                                    <a href="/NewBalanceShop/products.html?gender=kids&type=accessories">All Accessories</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&type=accessories&category=hats%20%26%20gloves">Hats & Gloves</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&type=accessories&category=socks">Socks</a>
                                    <a href="/NewBalanceShop/products.html?gender=kids&type=accessories&category=bags">Bags</a>
                                </div>

                            </div>
                        </div>

                        <div className="nav-item has-dropdown">
                            <Link to={"/products?sale=true"}>Sale</Link>

                            <div className="mega-menu">

                                <div className="mega-column featured">
                                    <h4>All Sale</h4>
                                    <a href="#">Under $50</a>
                                    <a href="#">Under $100</a>
                                </div>

                                <div className="mega-column">
                                    <h4>MEN</h4>

                                    <a href="#">Shoes</a>
                                    <a href="#">Clothing</a>
                                    <a href="#">Accessories</a>
                                </div>

                                <div className="mega-column">
                                    <h4>WOMEN</h4>

                                    <a href="#">Shoes</a>
                                    <a href="#">Clothing</a>
                                    <a href="#">Accessories</a>
                                </div>

                                <div className="mega-column">
                                    <h4>KIDS</h4>

                                    <a href="#">Shoes</a>
                                    <a href="#">Clothing</a>
                                    <a href="#">Accessories</a>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>

                <div className="header-icons">
                    <img className="search-icon" src="../src/assets/icons/header/search-icon.svg" alt=""/>
                    <img className="account-icon" src="../src/assets/icons/header/account-icon.svg" alt=""/>

                    <Link to={"/cart"} className="cart-link">
                        <img className="bag-icon" src="../src/assets/icons/header/bag-icon.svg" alt=""/>
                    </Link>

                </div>
            </header>
        </>
    )
}

export default MainHeader
