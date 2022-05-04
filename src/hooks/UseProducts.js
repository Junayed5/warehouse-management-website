import { useEffect, useState } from "react";

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://protected-coast-77549.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return [products];
};

export default UseProducts;