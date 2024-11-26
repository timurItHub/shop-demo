
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import HomePage from './components/Pages/HomePage';
import ProductPage from './components/Pages/ProductPage';
import CartPage from './components/Pages/CartPage';
import Header from './components/Header/Header';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}



export default App;
