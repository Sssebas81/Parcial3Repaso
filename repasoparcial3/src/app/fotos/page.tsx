import Navbar from "@/common/components/Navbar";

export default function Page() {
  return (
    <main className="">
      <Navbar/>
      <img
        src="https://www.nbcstore.com/cdn/shop/products/SHREK-SS-63-MF1.jpg?v=1693905182"
        alt="comida"
        className="w-full h-48 object-contain rounded-lg"
      />

      <img
        src="/leo.jpeg"
        alt="gato"
        className="w-full h-48 object-contain rounded-lg"
      />
    </main>

    

  );
}