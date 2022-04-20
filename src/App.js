import { render } from "react-dom";
import { useState } from "react";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import ThemeContext from "./ThemeContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
  const theme = useState("pink");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route exact path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
