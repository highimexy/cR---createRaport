import React from "react";
import { Button } from "@/components/ui/button"

const Page = () => {
  return (
    <div className="landing-background flex flex-col lg:flex-row justify-center items-center h-screen w-full gap-10 lg:gap-10 p-4 text-center lg:text-left">
      <div className="font-bold max-w-[800px]">
        <div>
          <span className="animated-text-fill font-mono text-5xl font-bold tracking-widest md:text-6xl lg:text-4xl">
            createRaport
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-8xl">
          The ultimate bug reporting tool
        </h1>
        <div className="flex justify-left gap-5 mt-10">
          <a href="./dashboard/">
            <Button variant="outline" className="h-12">Enter</Button>
          </a>
          <Button variant="outline" className="h-12">Contact us</Button>
        </div>
      </div>

      <div>
        <img
          src="/lupa.png"
          alt="Abstract 3D shape"
          className="|
            opacity-80
            w-48 h-48 
            md:w-64 md:h-64 
            lg:w-[min(600px,80vw)] lg:h-[min(600px,80vh)]"
        />
      </div>
    </div>
  );
};

export default Page;
