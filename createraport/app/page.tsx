import React from "react";

const page = () => {
  const repeatCount = 10;
  return (
    <div className="relative grid h-screen w-full place-items-center p-4 overflow-hidden">
      <h1 className="z-10 cursor-pointer text-center">
        {Array.from({ length: repeatCount }).map((_, index) => (
          <div key={index}>
            <span className="animated-text-fill font-oswald text-5xl font-bold uppercase tracking-widest md:text-6xl lg:text-8xl">
              createRaport
            </span>
          </div>
        ))}
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
