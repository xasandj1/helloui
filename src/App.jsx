import React from "react";
import {Businesses, Footer, Navbar, Sell, Technology, } from "./components";

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <main>
        <Sell/>
        <Technology/>
        <Businesses/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
