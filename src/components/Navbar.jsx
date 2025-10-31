
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">QamarCapar</h2>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Басты бет</Link>
        <Link to="/packages" className="hover:text-yellow-400">Умра пакеттері</Link>
        <Link to="/contact" className="hover:text-yellow-400">Байланыс</Link>
      </div>
    </nav>
  );
}
