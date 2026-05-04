'use client'
import { products } from "@/utils/product.util";
import ProductCard from "@/common/components/ProductCard"; 
import { useState } from "react";
import Filter from "@/common/components/Filter";
import Counter from "@/common/components/Counter";

export default function Home(){

    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = ["Todos", ...new Set(products.map(p => p.category))];

    const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter(p => p.category === selectedCategory);

    return(


        <main className="max-w-7xl mx-auto px-4 py-8">

            <Counter/>

            <h1 className="text-4xl font-bold text-center mb-8">
                our menu 
            </h1>
            
            <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            se agrega el filteredProducts.map en lugar de solo products.map para q se les aplique a las cards los filtros 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            
            aquí está lo mismo de arriba pero con products.map y aquí no se filtran las cards
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product= {product}/>
                ))}
            </div>
        </main>
    )
}