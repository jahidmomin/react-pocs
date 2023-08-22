import React from "react";
import { useCookies } from "react-cookie";
import "../App.css";

export default function UseCookieDemo() {
  const [cookies, setCookie] = useCookies(["theme", "language"]);

  const toggleTheme = () => {
    const newTheme = cookies.theme === "dark" ? "light" : "dark";
    setCookie("theme", newTheme, { path: "/" });
  };

  const changeLanguage = (newLanguage) => {
    setCookie("language", newLanguage, { path: "/" });
  };

  const currentTheme = cookies.theme || "light";
  const currentLanguage = cookies.language || "en";

  return (
    <div>
      <div className={`App ${currentTheme}`}>
        <header>
          <h1>Multiple Cookies Example</h1>
        </header>
        <main>
          <p>Current Theme: {currentTheme}</p>
          <button onClick={toggleTheme}>Toggle Theme</button>

          <p>Current Language: {currentLanguage}</p>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("es")}>Spanish</button>
        </main>
      </div>
    </div>
  );
}
