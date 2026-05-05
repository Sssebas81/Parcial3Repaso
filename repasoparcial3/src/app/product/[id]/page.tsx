'use client';

import Counter from '@/common/components/Counter';
import { getProductById } from '@/utils/product.util';
import { notFound, useRouter } from 'next/navigation';
import { use } from 'react';

interface ProductDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = use(params);
    const router = useRouter();
    const product = getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <main className="max-w-2xl mx-auto px-4 py-8">
            <button
                onClick={() => router.back()}
                className="btn btn-ghost mb-6"
            >
                ← Back
            </button>

            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-96 object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-3xl">{product.title}</h1>
                    <p className="text-3xl font-bold text-primary">${product.price.toLocaleString()}</p>
                </div>
            </div>

            <Counter/>
        </main>
    );
}