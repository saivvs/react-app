import React from "react";
import logo from "../../logo.svg";
function Page1() {
  return(
      <div className='h-screen bg-black text-white flex flex-col justify-center items-center'>
      <img src={logo} className='App-logo w-1/4'/>
      <h1>Page 1</h1>
      </div>
      ) 
}

export default Page1;
