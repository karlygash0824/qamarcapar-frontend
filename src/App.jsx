


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Packages from "./pages/Packages";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        {/* 🔹 Header */}
        <header className="bg-blue-700 text-white py-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">🌙 Qamarcapar</h1>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-blue-200 transition">Басты бет</Link>
              <Link to="/packages" className="hover:text-blue-200 transition">Пакеттер</Link>
              <Link to="/contact" className="hover:text-blue-200 transition">Байланыс</Link>
            </div>
          </nav>
        </header>

        {/* 🔹 Негізгі контент */}
        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-blue-700 mb-4">
                    Умра сапарына қош келдіңіз!
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Qamarcapar сізге ең қолжетімді және жайлы Умра пакеттерін ұсынады.
                  </p>
                </div>
              }
            />
            <Route path="/packages" element={<Packages />} />
            <Route
              path="/contact"
              element={
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">Байланыс</h2>
                  <p>📞 Телефон: +7 7057271707</p>
                  <p>📧 Email: info@qamarcapar.kz</p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* 🔹 Footer */}
        <footer className="bg-blue-700 text-white py-4 text-center">
          <p>© 2025 Qamarcapar. Барлық құқықтар қорғалған.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
