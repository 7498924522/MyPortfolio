import React from "react";

function Title({icon, title, description }) {
  
  return (
    <div>
      <div className="text-center justify-center mb-10">
        
        <h1 className="font-semibold text-4xl md:text-5xl  text-black ">
         <u className="flex justify-center items-center  underline  decoration-cyan-300 gap-4"><span className="flex items-center">{icon}</span>{title}</u> 
        </h1>
        <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Title;
