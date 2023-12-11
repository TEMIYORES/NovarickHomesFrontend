import React from "react";
type containerType = {
  children: React.ReactNode;
};
const Container: React.FC<containerType> = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto xl:px-8 md:px-4 px-2 overflow-x-hidden">
      {children}
    </div>
  );
};

export default Container;
