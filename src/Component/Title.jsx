import React from "react";

function Title({icon, title, description }) {
  if (!document.getElementById("syne-font")) {
  const l = document.createElement("link");
  l.id = "syne-font";
  l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap";
  document.head.appendChild(l);
}
  return (
    <div>
      <div className="text-center justify-center mb-10">
        
        <h1 className="syne text-2xl md:text-5xl  text-black ">
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
