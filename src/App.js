import React, {useState} from "react";
import Web3Context from "./contexts/Web3Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Emit from "./components/Emit";

function App() {
  const [web3Provider, setWeb3Provider] = useState(null);
  const [address, setAddress] = useState("");

  const context = {
    web3Provider,
    address,
    setWeb3Provider,
    setAddress
  }
  return (
    <Web3Context.Provider value={context}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/emit" element={<Emit/>}/>
        </Routes>
      </BrowserRouter>
    </Web3Context.Provider>
  );
}

export default App;
