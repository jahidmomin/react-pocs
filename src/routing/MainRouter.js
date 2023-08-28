import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import UseCookieDemo from "../cookie/UseCookieDemo";

export default function MainRouter() {
  return (
    <div>
      <BrowserRouter>
        <li>
          <Link to={"/about"}>/about</Link>
        </li>
        <li>
          <Link to={"/contact"}>/contact</Link>
        </li>
        <li>
          <Link to={"/login"}>/login</Link>
        </li>

        <li>
          <Link to={"/cookie"}>/cookie</Link>
        </li>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>}></Route>
          <Route path="/about" element={<h2>About Page</h2>}></Route>
          <Route path="/contact" element={<h2>contact Page</h2>}></Route>
          <Route path="/login" element={<h2>Login Page</h2>}></Route>
          <Route path="/cookie" element={<UseCookieDemo />}></Route>
          <Route path="*" element={<h2>Not Found</h2>}></Route>
          <Route path="/old-route" element={<Navigate to="/login" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
