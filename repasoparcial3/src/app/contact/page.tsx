"use client";

import Navbar from "@/common/components/Navbar";
import Accordion from "@/common/components/Accordion"; 

export default function Page() {
  const items = [
    {
      title: "¿Cómo contactarnos?",
      content: "Puedes escribirnos al correo o redes sociales.",
    },
    {
      title: "Horario de atención",
      content: "Lunes a viernes de 8am a 6pm.",
    },
    {
      title: "Ubicación",
      content: "Cali, Colombia.",
    },
  ];

  return (
    <main>
      <Navbar />

      <h1 className="text-3xl font-bold mb-6 text-center">
        Contacto
      </h1>

      <div className="p-5 max-w-xl mx-auto">
        <Accordion items={items} />
      </div>
    </main>
  );
}