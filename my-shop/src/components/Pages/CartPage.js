import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCart, removeItemFromCart, updateItemQuantity } from '../../redux/actions/cartActions';
import styles from './CartPage.module.scss';

function CartPage() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart?.cartItems || []);

    useEffect(() => {
        const loadCartData = async () => {
            try {
                await dispatch(loadCart());
            } catch (error) {
                console.error('Failed to load cart:', error.message);
            }
        };
        loadCartData();
    }, [dispatch]);
    

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleRemove = (productId) => {
        dispatch(removeItemFromCart(productId));
    };

    const handleQuantityChange = (productId, quantity) => {
        if (quantity > 0) {
            dispatch(updateItemQuantity(productId, quantity));
        }
    };

    return (
        <div className={styles['cart-container']}>
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles['cart-item']}>
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <div className={styles['quantity-controls']}>
                                <button
                                    className={styles['quantity-button']}
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className={styles['quantity']}>{item.quantity}</span>
                                <button
                                    className={styles['quantity-button']}
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className={`${styles['remove-button']} button`}
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className={styles['total-container']}>
                        <h2>Total: ${calculateTotal()}</h2>
                    </div>
                </>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}

export default CartPage;
