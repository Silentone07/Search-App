import React, { useState } from "react";
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import { StateContextProvider } from "./contexts/StateContextProvider";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <StateContextProvider>
      <div className={darkTheme ? 'dark' : ''}>
        <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Routes />
          <Footer />
        </div>
      </div>
    </StateContextProvider>
  );
}

export default App;
