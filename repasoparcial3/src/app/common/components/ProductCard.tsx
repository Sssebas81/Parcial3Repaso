import { SimpleProduct } from "../../../utils/product.util";

interface ProductCardProps {
    product: SimpleProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card bg-base-100 w-80 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="px-4 pt-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-xl h-48 w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{product.title}</h2>
                <p className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}