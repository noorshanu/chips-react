// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import './style/trade.css'
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners";
import TradeYield from "./components/TradeYield";
import Onboard from "./components/Onboard";
import Magic from "./components/Magic/Magic";
import UseCase from "./components/UseCase/UseCase";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <TradeYield/>
      <Onboard/>
      <Magic/>
      <UseCase/>
    </>
  );
}

export default App;
