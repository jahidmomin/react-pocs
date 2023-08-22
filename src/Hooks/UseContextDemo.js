import React, { createContext, useContext } from "react";
import UseContext2 from "./UseContext2";

const context = createContext(null);

export function Login() {
  const ref = useContext(context);
  return <div>Login - {ref.username} </div>;
}

export function Logout() {
  const ref = useContext(context);
  return <div>Logout - {ref.username} </div>;
}

export function Main() {
  const ref = useContext(context);
  return (
    <div>
      Main - {ref.username}
      <SubMenu />
      <UseContext2 context={ref} />
    </div>
  );
}

export function SubMenu() {
  const ref = useContext(context);
  return <div>SubMenu - {ref.username}</div>;
}

export default function UseContextDemo() {
  return (
    <div>
      <context.Provider value={{ username: "jahid" }}>
        <Login />
        <Main />
        <Logout />
      </context.Provider>
    </div>
  );
}
