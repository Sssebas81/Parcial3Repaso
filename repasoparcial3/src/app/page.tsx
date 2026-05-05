'use client'
import { products } from "@/utils/product.util";
import ProductCard from "@/common/components/ProductCard"; 
import { useState } from "react";
import Filter from "@/common/components/Filter";
import Counter from "@/common/components/Counter";
import Navbar from "@/common/components/Navbar";

export default function Home(){

    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const categories = ["Todos", ...new Set(products.map(p => p.category))];

    const filteredProducts = selectedCategory === "Todos" ? products : products.filter(p => p.category === selectedCategory);

    return(


        <main className="max-w-7xl mx-auto px-4 py-8">

            <Navbar/>

            <h1 className="text-4xl font-bold text-center mb-8">
                Our Menu 
            </h1>
            
            <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </main>
    )
}