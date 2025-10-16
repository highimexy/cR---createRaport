import React from 'react';
import './CreateRaport.css'; // Zaimportuj plik CSS

 export const CreateRaport = ({ text = "createRaport" }) => {
  return (
    <span className=" group-data-[collapsible=icon]:hidden animated-text-fill font-mono text-2xl font-bold tracking-widest md:text-2xl lg:text-[29px]">
      {text}
    </span>
  );
};

export default CreateRaport;