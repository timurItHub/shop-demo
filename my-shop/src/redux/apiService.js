
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3333';

// Fetch all categories
export const fetchCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/categories/all`);
    return response.data;
};

// Fetch category image
export const fetchCategoryImage = (id) => {
    return `${API_BASE_URL}/category_img/${id}.jpeg`;
};

// Fetch all products (assuming an endpoint, adjust as necessary)
export const fetchProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products/all`);
    return response.data;
};

// Fetch product by ID
export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

// Add product to cart
export const addToCart = async (productId, quantity) => {
    const response = await axios.post(`${API_BASE_URL}/cart`, { productId, quantity });
    return response.data;
};

// Fetch cart items
export const fetchCart = async () => {
    const response = await axios.get(`${API_BASE_URL}/cart/all`);
    return response.data;
};

// Remove item from cart
export const removeFromCart = async (productId) => {
    const response = await axios.delete(`${API_BASE_URL}/cart/${productId}`);
    return response.data;
};

// Update cart item quantity
export const updateCartQuantity = async (productId, quantity) => {
    const response = await axios.put(`${API_BASE_URL}/cart`, { productId, quantity });
    return response.data;
};
