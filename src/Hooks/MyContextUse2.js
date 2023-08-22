import React from "react";
import MyContext from "../context/MyContext";
import UseContext2 from "./UseContext2";
import UseContext3 from "./UseContext3";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <MyContext>
      <UseContext2 />
      <UseContext3/>
    </MyContext>
  );
}
