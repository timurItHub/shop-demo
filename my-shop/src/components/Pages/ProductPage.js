
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    return <div>Product Page for Product ID: {id}</div>;
}

export default ProductPage;
