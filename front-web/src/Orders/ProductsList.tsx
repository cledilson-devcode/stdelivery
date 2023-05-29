import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
}

function ProductsList({products}: Props) {
    return(
        <section className="orders-list-container">
            <div className="orders-list-items">
                {products.map(products => (
                    <ProductCard key={products.id} products={products}/> 
                ))}
            </div>
        </section>
    );
}

export default ProductsList;