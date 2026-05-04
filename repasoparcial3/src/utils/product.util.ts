export interface SimpleProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string; // Nueva propiedad
}

// Definir categorías disponibles
export const categories = {
  FAST_FOOD: 'Comida Rápida',
  SIDES: 'Acompañamientos',
  SALADS: 'Ensaladas'
} as const;

export const products: SimpleProduct[] = [
    {
        id: "1",
        title: 'Salchipapa',
        price: 20000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW6q1VA15_BuQ1sFF6_JFzB67ap6ZhKpH1Q&s',
        category: categories.FAST_FOOD
    },
    {
        id: "2",
        title: 'Joddog',
        price: 15000,
        image: 'https://img.freepik.com/foto-gratis/perro-caliente-clasico-ketchup-salsa-mostaza-aislado-sobre-fondo-blanco_123827-29686.jpg?semt=ais_hybrid&w=740&q=80',
        category: categories.FAST_FOOD
    },
    {
        id: "3",
        title: 'Burgir',
        price: 25000,
        image: 'https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg',
        category: categories.FAST_FOOD
    },
    {
        id: "4",
        title: 'Ensalada',
        price: 20000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zck7Dm_Nhjrn8Se1BThfcv6aymw_hzZItg&s',
        category: categories.SALADS
    },
    {
        id: "5",
        title: 'Papas Fritas',
        price: 10000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdk3StrVGcWzGdiH7QIn3tAktMspFM4rhKVA&s',
        category: categories.SIDES
    },
    {
        id: "6",
        title: 'Papas mixtas',
        price: 30000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64VZVIjlTQT_y2UwvAoBEcOKEepmsAHw_2w&s',
        category: categories.SIDES
    }
];

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string) => 
  products.filter((p) => p.category === category);

// Función para obtener todas las categorías únicas
export const getUniqueCategories = () => 
  [...new Set(products.map((p) => p.category))];

// Función original
export const getProductById = (id: string) => 
  products.find((p) => p.id === id);