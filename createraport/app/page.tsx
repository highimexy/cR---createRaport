import React from "react";

const page = () => {
  return (
    <div className="relative grid h-screen w-full place-items-center p-4 overflow-hidden">
      {/* Tekst - na wierzchu, wyśrodkowany */}
      <h1 className="font-mono cursor-pointer text-5xl md:text-6xl lg:text-8xl col-start-1 row-start-1 z-10 shadow-2xl shadow-amber-50">
        createRaport
      </h1>

      {/* 4. Pierwszy "robaczek" - Górny Prawy Róg */}
      <img
        src="/ASCII ART - WHITE BUG.png"
        alt="Robaczek w górnym prawym rogu"
        className="absolute top-4 right-4 object-contain z-20 transition-transform duration-300
                   w-32 h-32 // Domyślny rozmiar na mobile
                   md:w-48 md:h-48 // Rozmiar na tabletach
                   lg:w-[min(700px,90vw)] lg:h-[min(700px,90vh)]
                   rotate-180"
      />

      {/* 5. Drugi "robaczek" - Dolny Lewy Róg */}
      <img
        src="/ASCII ART - WHITE BUG.png"
        alt="Robaczek w dolnym lewym rogu"
        className="absolute bottom-4 left-4 object-contain z-20 transition-transform duration-300
                   w-32 h-32 // Domyślny rozmiar na mobile
                   md:w-48 md:h-48 // Rozmiar na tabletach
                   lg:w-[min(700px,90vw)] lg:h-[min(700px,90vh)]"
      />
    </div>
  );
};

export default page;
