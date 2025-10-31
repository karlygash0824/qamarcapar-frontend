import React, { useState } from "react";

function Packages() {
  const packages = [
    {
      id: 1,
      title: "Эконом пакет",
      days: "10 күн",
      price: "700,000 тг",
      hotel: "3⭐ Мекке / Мәдина",
      flight: "Билет бар",
    },
    {
      id: 2,
      title: "Стандарт пакет",
      days: "14 күн",
      price: "900,000 тг",
      hotel: "4⭐ Қасиетті Харем маңында",
      flight: "Билет бар",
    },
    {
      id: 3,
      title: "VIP пакет",
      days: "14 күн",
      price: "1,400,000 тг",
      hotel: "5⭐ ZamZam / Hilton",
      flight: "Бизнес-класс",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "" });

  // ✅ Жаңартылған handleSubmit функциясы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Атыңыз бен телефон нөміріңізді енгізіңіз!");
      return;
    }

    try {
      console.log("📤 Жіберілетін мәлімет:", {
        ...form,
        package: selected.title,
      });

      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          package: selected.title,
        }),
      });

      console.log("📥 Серверден жауап:", response.status);

      const data = await response.json();
      console.log("🔍 Сервер жауап JSON:", data);

      if (response.ok) {
        alert("✅ Сәтті тіркелдіңіз!");
        setSelected(null);
        setForm({ name: "", phone: "" });
      } else {
        alert("Қате пайда болды. Кейінірек қайталап көріңіз.");
      }
    } catch (err) {
      console.error("❌ Сервермен байланыс қатесі:", err);
      alert("Сервермен байланыс орнатылмады!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        🕋 Умра тур пакеттері
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-72 p-6 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {pkg.title}
            </h2>
            <div className="text-gray-600 space-y-1 mb-4">
              <p>⏳ Ұзақтығы: {pkg.days}</p>
              <p>💰 Бағасы: {pkg.price}</p>
              <p>🏨 Отель: {pkg.hotel}</p>
              <p>✈️ {pkg.flight}</p>
            </div>
            <button
              onClick={() => setSelected(pkg)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Тіркелу
            </button>
          </div>
        ))}
      </div>

      {/* 🧾 Тіркелу формасы */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {selected.title} пакеті
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Атыңыз"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-lg p-2 focus:outline-blue-400"
              />
              <input
                type="tel"
                placeholder="Телефон нөмірі"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border rounded-lg p-2 focus:outline-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Жіберу
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Packages;

