import { products } from "@/utils/product.util";
import ProductCard from "../../../common/components/ProductCard"

export default function Home(){
    return(
        <main className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Our Menu 
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product= {product}/>
                ))}
            </div>
        </main>
    )
}