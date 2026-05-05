'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    description: ''
  });

  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Agregar nuevo producto
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image || 'https://via.placeholder.com/300x200?text=No+Image',
      category: formData.category,
      description: formData.description
    };
    
    setProducts([...products, newProduct]);
    resetForm();
  };

  // Actualizar producto existente
  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    setProducts(products.map(product => 
      product.id === editingId 
        ? {
            ...product,
            name: formData.name,
            price: parseFloat(formData.price),
            image: formData.image || 'https://via.placeholder.com/300x200?text=No+Image',
            category: formData.category,
            description: formData.description
          }
        : product
    ));
    resetForm();
  };

  // Editar producto (cargar datos al formulario)
  const handleEdit = (product: Product) => {
    setIsEditing(true);
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      image: product.image,
      category: product.category,
      description: product.description
    });
    // Scroll al formulario
    document.getElementById('product-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Eliminar producto
  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  // Resetear formulario
  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      image: '',
      category: '',
      description: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  // Categorías disponibles
  const categories = ['Fast Food', 'Saludable', 'Acompañamiento', 'Bebidas', 'Postres'];

  return (
    <div className="space-y-8">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center">📦 Administrador de Productos</h2>
      
      {/* FORMULARIO para agregar/editar */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-xl">
            {isEditing ? '✏️ Editar Producto' : '➕ Agregar Nuevo Producto'}
          </h3>
          
          <form id="product-form" onSubmit={isEditing ? handleUpdateProduct : handleAddProduct} className="space-y-4">
            {/* Nombre */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Nombre del producto *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Hamburguesa Especial"
                className="input input-bordered"
                required
              />
            </div>

            {/* Precio y Categoría en grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Precio *</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Ej: 25000"
                  className="input input-bordered"
                  required
                  min="0"
                  step="1000"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Categoría</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="select select-bordered"
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* URL de imagen */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">URL de la imagen</span>
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text-alt text-gray-400">
                  Deja vacío para usar imagen por defecto
                </span>
              </label>
            </div>

            {/* Descripción */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Descripción</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe el producto..."
                className="textarea textarea-bordered"
                rows={3}
              />
            </div>

            {/* Botones del formulario */}
            <div className="flex gap-3">
              <button type="submit" className="btn btn-primary flex-1">
                {isEditing ? '💾 Actualizar Producto' : '✨ Agregar Producto'}
              </button>
              
              {isEditing && (
                <button type="button" onClick={resetForm} className="btn btn-outline">
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* LISTA DE PRODUCTOS (tarjetas) */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">📋 Mis Productos ({products.length})</h3>
          {products.length > 0 && (
            <button 
              onClick={() => setProducts([])}
              className="btn btn-error btn-sm"
            >
              Eliminar todos
            </button>
          )}
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16 bg-base-200 rounded-xl">
            <span className="text-6xl">🛒</span>
            <p className="text-gray-500 mt-4">No hay productos agregados</p>
            <p className="text-sm text-gray-400">Completa el formulario para agregar tu primer producto</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                {/* Imagen */}
                <figure className="px-4 pt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl h-48 w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
                    }}
                  />
                </figure>
                
                {/* Contenido */}
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl">{product.name}</h2>
                    <span className="badge badge-primary">{product.category || 'Sin categoría'}</span>
                  </div>
                  
                  <p className="text-3xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </p>
                  
                  {product.description && (
                    <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  )}
                  
                  {/* Botones de acción */}
                  <div className="card-actions justify-end mt-4 gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="btn btn-warning btn-sm"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-error btn-sm"
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}