// export default function Contact() {
//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-4">Байланыс</h2>

//       <p className="text-center mb-6">
//         Егер сізде сұрақ болса, бізге хабарласыңыз.
//       </p>

//       <form className="space-y-4 bg-white p-4 shadow-lg rounded-lg">
//         <div>
//           <label className="block mb-1 font-medium">Аты-жөніңіз</label>
//           <input 
//             type="text" 
//             className="w-full border p-2 rounded" 
//             placeholder="Атыңызды жазыңыз" 
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Телефон</label>
//           <input 
//             type="text" 
//             className="w-full border p-2 rounded" 
//             placeholder="+7..." 
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Хабарлама</label>
//           <textarea 
//             className="w-full border p-2 rounded" 
//             rows="4"
//             placeholder="Сұрағыңызды жазыңыз..."
//           ></textarea>
//         </div>

//         <button className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition">
//           Жіберу
//         </button>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
//   const CHAT_ID = "1082065344";

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     const text = `📩 Жаңа сұраныс!\n👤 Аты: ${name}\n📞 Телефон: ${phone}\n✉️ Хабарлама: ${message}`;

//     await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         chat_id: CHAT_ID,
//         text,
//       }),
//     });

//     alert("✅ Сұраныс жіберілді!");
//     setName("");
//     setPhone("");
//     setMessage("");
//   };

//   return (
//     <div className="p-8 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Байланыс</h2>

//       <form onSubmit={sendMessage} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Атыңыз"
//           className="w-full p-2 border rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input
//           type="text"
//           placeholder="Телефон"
//           className="w-full p-2 border rounded"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Хабарламаңыз"
//           className="w-full p-2 border rounded"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Жіберу
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
const res = await fetch("https://qamarcapar-backend-1.onrender.com/api/contact", {
 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
    alert(data.message);
    } else {
    alert(data.error || "⚠️ Қате: " + data.message);  
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Атыңыз"
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="phone"
        placeholder="Телефон"
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Хабарлама"
        onChange={handleChange}
        className="border p-2 w-full"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Жіберу
      </button>
    </form>
  );
}



