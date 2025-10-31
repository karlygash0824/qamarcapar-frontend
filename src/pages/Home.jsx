// export default function Home() {
//   return (
//     <div>

//       {/* Banner Section */}
//       <div className="relative h-[450px] bg-[url('/banner.jpg')] bg-cover bg-center">
//         <div className="absolute inset-0 bg-black/40"></div>
//         <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
//           Умраға қош келдіңіз!
//         </h1>
//       </div>

//       {/* Other content below */}
//       <section className="p-8 text-center">
//         <h2 className="text-2xl font-semibold">
//           Қасиетті мекенге қадам басыңыз
//         </h2>
//       </section>

//     </div>
//   );
// }


// export default function Home() {
//   return (
//     <div className="relative h-[450px] bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat">
//       <div className="absolute inset-0 bg-black/40"></div>
//       <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold drop-shadow-lg text-center px-4">
//         Умраға қош келдіңіз!
//       </h1>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className="relative h-[450px]">
      <img
        src="/banner.jpg"
        alt="Мекке баннері"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Умраға қош келдіңіз!</h1>
      </div>
    </div>
  );
}

