import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../../redux/actions/productsActions';
import { loadCategories } from '../../redux/actions/categoriesActions';
import styles from './HomePage.module.scss';

function HomePage() {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products || []);
    const categories = useSelector((state) => state.categories.categories || []);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        dispatch(loadProducts());
        dispatch(loadCategories());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const filterByCategory = (categoryId) => {
        setActiveCategory(categoryId);
        if (categoryId === 'all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((product) => product.categoryId === categoryId));
        }
    };

    return (
        <div className={styles['home-container']}>
            
            <section className={styles['banner-section']}>
                <h1>Amazing Discounts on Garden Products!</h1>
                <button className={styles['checkout-button']}>Check out</button>
            </section>

            
            <section className={styles['categories-section']}>
                <h2>Categories</h2>
                <div className={styles['categories-container']}>
                    <div
                        className={`${styles['category-card']} ${activeCategory === 'all' ? styles['active'] : ''}`}
                        onClick={() => filterByCategory('all')}
                    >
                        {/* <img src="/images/all-categories.jpg" alt="All Categories" /> */}
                        <h3>All Categories</h3>
                    </div>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`${styles['category-card']} ${activeCategory === category.id ? styles['active'] : ''}`}
                            onClick={() => filterByCategory(category.id)}
                        >
                            <img src={category.imageUrl || '/placeholder.jpg'} alt={category.name} />
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            
            <section className={styles['products-section']}>
                <h2>Products</h2>
                <div className={styles['products-container']}>
                    {filteredProducts.map((product) => (
                        <div className={styles['product-card']} key={product.id}>
                            <h2>{product.name}</h2>
                            <img src={product.imageUrl || '/placeholder-product.jpg'} alt={product.name} />
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <button className={styles['add-to-cart-button']}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>

            
            <section className={styles['discount-section']}>
                <h2>5% off on the first order</h2>
                <form className={styles['discount-form']}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone number" />
                    <input type="email" placeholder="Email" />
                    <button type="submit">Get a discount</button>
                </form>
            </section>
        </div>
    );
}

export default HomePage;
