/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from "react";

export default function () {
  let name = "";

  const [error, seterror] = useState("")

  let handleChange = (e) => {
    if (e.target.value.length>5) {
        seterror("too large");
    }
    e.target.style.backgroundColor="white";
  };

  let focushandler=(e)=>{
    e.target.style.backgroundColor="red";
  }

  return (
    <>
      <form>
        {/* Inlcude all manuallvalidation though Js funcitons/handlers and
          its very complex way to do that. so instead of that we use thirdparty librayry 
        */}
        <input type="text" onBlur={handleChange} onFocus={focushandler} defaultValue={name} />
        <p>{error}</p>
      </form>
    </>
  );
}
