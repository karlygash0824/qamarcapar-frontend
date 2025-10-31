
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Qamarcapar</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:underline">
            Басты бет
          </Link>
          <Link to="/contact" className="hover:underline">
            Байланыс
          </Link>
        </nav>
      </div>
    </header>
  );
}

