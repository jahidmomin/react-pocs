import React from "react";
import MyContext from "./MyProvider";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ children }) {
  return (
    <div>
      <MyContext.Provider value={{ state: "jahid" }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}
