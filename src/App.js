import React, {useState} from "react";
import Web3Context from "./contexts/Web3Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";

function App() {
  const [signer, setSigner] = useState(null);
  const[provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");

  const context = {
    signer,
    provider,
    address,
    setSigner,
    setProvider,
    setAddress
  }
  return (
    <Web3Context.Provider value={context}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Web3Context.Provider>
  );
}

export default App;
