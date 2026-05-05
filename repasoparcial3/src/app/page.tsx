// app/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/common/components/Navbar';
import Accordion from '@/common/components/Accordion';
import Alert from '@/common/components/Alert';
import ButtonGroup from '@/common/components/ButtonGroup';
import CardBasic from '@/common/components/CardBasic';
import CardWithImage from '@/common/components/CardWithImage';
import CartBadge from '@/common/components/CartBadge';
import Counter from '@/common/components/Counter';
import Divider from '@/common/components/Divider';
import Dropdown from '@/common/components/Dropdown';
import Filter from '@/common/components/Filter';
import Input from '@/common/components/Input';
import Modal from '@/common/components/Modal';
import Pagination from '@/common/components/Pagination';
import PriceFilter from '@/common/components/PriceFilter';
import QuantitySelector from '@/common/components/QuantitySelector';
import RadioGroup from '@/common/components/RadioGroup';
import Rating from '@/common/components/Rating';
import SearchBar from '@/common/components/SearchBar';
import Select from '@/common/components/Select';
import Breadcrumb from '@/common/components/BreadCrumb';
import Checkbox from '@/common/components/CheckBox';
import ButtonPrimary from '@/common/components/ButtonPrimary';

export default function Home() {
  // Estados para cada componente
  const [showAlert, setShowAlert] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isChecked, setIsChecked] = useState(false);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [quantity, setQuantity] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState("delivery");
  const [rating, setRating] = useState(0);
  const [selectedSelect, setSelectedSelect] = useState("");
  const [cartCount, setCartCount] = useState(3);

  // Datos de ejemplo
  const categories = ["Todos", "Fast Food", "Saludable", "Acompañamiento"];
  const accordionItems = [
    { title: "¿Cuál es el horario?", content: "Abierto de 11am a 10pm" },
    { title: "¿Hacen domicilios?", content: "Sí, a toda la ciudad" }
  ];
  const dropdownItems = [
    { label: "Perfil", onClick: () => console.log("Perfil") },
    { label: "Cerrar sesión", onClick: () => console.log("Logout") }
  ];
  const radioOptions = [
    { value: "delivery", label: "Delivery" },
    { value: "pickup", label: "Recoger" }
  ];
  const selectOptions = [
    { value: "op1", label: "Opción 1" },
    { value: "op2", label: "Opción 2" }
  ];

  return (
    <>
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Probando Todos los Componentes 🧪
        </h1>

        {/* ALERT */}
        {showAlert && (
          <Alert 
            type="success" 
            message="Componentes funcionando correctamente!" 
            onClose={() => setShowAlert(false)}
          />
        )}

        {/* BREADCRUMB */}
        <Breadcrumb items={[
          { label: "Inicio", href: "/" },
          { label: "Pruebas", href: "/test" }
        ]} />

        <Divider />

        {/* ACCORDION */}
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Accordion</h2>
        <Accordion items={accordionItems} />

        {/* BUTTON GROUP */}
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Button Group</h2>
        <ButtonGroup orientation="horizontal">
          <ButtonPrimary>Botón 1</ButtonPrimary>
          <ButtonPrimary>Botón 2</ButtonPrimary>
        </ButtonGroup>

        {/* CARD BASIC */}
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Card Basic</h2>
        <CardBasic>
          <h3>Tarjeta Básica</h3>
          <p>Contenido de ejemplo</p>
        </CardBasic>

        {/* CARD WITH IMAGE */}
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Card With Image</h2>
        <CardWithImage
          image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          title="Hamburguesa"
          description="Deliciosa hamburguesa"
          actions={<ButtonPrimary>Ordenar</ButtonPrimary>}
        />

        {/* CART BADGE */}
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Cart Badge</h2>
        <CartBadge count={cartCount} onClick={() => alert("Carrito")} />

        {/* CHECKBOX */}
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Checkbox</h2>
        <Checkbox 
          label="Acepto términos"
          checked={isChecked}
          onChange={setIsChecked}
        />

        {/* COUNTER */}
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Counter</h2>
        <Counter 
          value={counter}
          onChange={setCounter}
          min={0}
          max={10}
        />

        {/* DROPDOWN */}
        <h2 className="text-2xl font-bold mt-8 mb-4">8. Dropdown</h2>
        <Dropdown trigger={<button className="btn">Menú</button>} items={dropdownItems} />

        {/* FILTER */}
        <h2 className="text-2xl font-bold mt-8 mb-4">9. Filter</h2>
        <Filter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* INPUT */}
        <h2 className="text-2xl font-bold mt-8 mb-4">10. Input</h2>
        <Input 
          label="Nombre"
          value={inputValue}
          onChange={setInputValue}
          placeholder="Escribe algo"
        />

        {/* MODAL */}
        <h2 className="text-2xl font-bold mt-8 mb-4">11. Modal</h2>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          Abrir Modal
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Ejemplo">
          <p>Contenido del modal</p>
        </Modal>

        {/* PAGINATION */}
        <h2 className="text-2xl font-bold mt-8 mb-4">12. Pagination</h2>
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />

        {/* PRICE FILTER */}
        <h2 className="text-2xl font-bold mt-8 mb-4">13. Price Filter</h2>
          <PriceFilter 
          minPrice={0}
          maxPrice={50000}
          onPriceChange={(min: number, max: number) => setPriceRange({ min, max })}
          step={1000}
        />

        {/* QUANTITY SELECTOR */}
        <h2 className="text-2xl font-bold mt-8 mb-4">14. Quantity Selector</h2>
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} min={1} max={10} />

        {/* RADIO GROUP */}
        <h2 className="text-2xl font-bold mt-8 mb-4">15. Radio Group</h2>
        <RadioGroup 
          name="orderType"
          options={radioOptions}
          value={selectedRadio}
          onChange={setSelectedRadio}
        />

        {/* RATING */}
        <h2 className="text-2xl font-bold mt-8 mb-4">16. Rating</h2>
        <Rating value={rating} onChange={setRating} size="md" />

        {/* SEARCH BAR */}
        <h2 className="text-2xl font-bold mt-8 mb-4">17. Search Bar</h2>
        <SearchBar onSearch={(q) => console.log(q)} placeholder="Buscar..." />

        {/* SELECT */}
        <h2 className="text-2xl font-bold mt-8 mb-4">18. Select</h2>
        <Select 
          label="Elige opción"
          options={selectOptions}
          value={selectedSelect}
          onChange={setSelectedSelect}
        />
      </main>
    </>
  );
}