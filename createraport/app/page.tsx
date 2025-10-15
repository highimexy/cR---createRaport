import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full gap-10 lg:gap-10 p-4 text-center lg:text-left">
      <div className="text-3xl md:text-4xl lg:text-8xl font-bold max-w-[800px]">
        <div>
          <span className="animated-text-fill font-mono text-5xl font-bold tracking-widest md:text-6xl lg:text-4xl">
            createRaport
          </span>
        </div>
        The ultimate bug reporting tool
        <div className="flex justify-center lg:justify-start gap-5 md:gap-10 mt-8">
          {/* Lepsze stylowanie przycisków */}
          <button className="button">
            <div className="button-overlay"></div>
            <span>
              START NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 53 58"
              >
                <path
                  strokeWidth="9"
                  stroke="currentColor"
                  d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"
                ></path>
              </svg>
            </span>
          </button>
          <button className="button">
            <div className="button-overlay"></div>
            <span>CONTACT US</span>
          </button>
        </div>
      </div>

      <div>
        <img
          src="/lupa.png"
          alt="Abstract 3D shape"
          className="
            opacity-60
            w-48 h-48 
            md:w-64 md:h-64 
            lg:w-[min(800px,80vw)] lg:h-[min(800px,80vh)]"
        />
      </div>
    </div>
  );
};

export default Page;
