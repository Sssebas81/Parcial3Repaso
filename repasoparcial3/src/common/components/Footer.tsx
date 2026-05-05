export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10 mt-10">

      {/* 🐾 Marca */}
      <aside>
        <div className="text-4xl">🐾</div>

        <p className="font-bold text-lg">
          Firulais
          <br />
          Las mejores comidas rapidas de Cali
        </p>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </aside>

      {/* 🌐 Redes */}
      <nav>
        <div className="grid grid-flow-col gap-4">

          {/* Twitter */}
          <a className="hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
            </svg>
          </a>

          {/* YouTube */}
          <a className="hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246..." />
            </svg>
          </a>

          {/* Facebook */}
          <a className="hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12..." />
            </svg>
          </a>

        </div>
      </nav>
    </footer>
  );
}