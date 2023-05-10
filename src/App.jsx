// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners";
import TradeYield from "./components/TradeYield";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <TradeYield/>
    </>
  );
}

export default App;
