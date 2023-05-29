import { useEffect, useState } from "react";
import Footer from "../Footer";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { Product } from "./types";
import { fetchProducts } from "../api";

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
   
    
    useEffect(() => {
        fetchProducts()
            .then(reponse => setProducts(reponse.data))
            .catch(error => console.log(error));
        
    }, []);

    return(
        <section className="orders-container">
            <StepsHeader/>
            <ProductsList products={products}/>
            <Footer/>
        </section>
    );
}

export default Orders;