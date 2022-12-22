import styled from "styled-components";
import { useContext } from "react";
import Web3Context from "../contexts/Web3Context";
import { connectMetamask } from "../utils/connectMetamask";

export default function ConnectButton(){

    const {web3Provider, address, setWeb3Provider, setAddress} = useContext(Web3Context);

    function betterAddress(addressStr){
        return addressStr.substr(0, 6) + "..." + address.substr(-4);
    }

    function disconnectMetamask(){
        const disconnect = window.confirm("Você realmente deseja desconectar sua carteira?");
        if (!disconnect) return;
        try{
            setWeb3Provider(null);
            setAddress("");
        } catch(error){
            alert("Erro ao desconectar carteira!");
        }
    }

    async function handleConnection(){
        if(address == ""){
            try{
                const {web3, address} = await connectMetamask();
                setWeb3Provider(web3);
                setAddress(address);
            } catch (error){
                alert("Você precisa autorizar o acesso à sua carteira!");
            }
        } else{
            disconnectMetamask();
        }  
    }

    return(
        <ConnectButtonStyle onClick={() => handleConnection()}>
            {address == ""? 'Conecte sua carteira': betterAddress(address)}
        </ConnectButtonStyle>
    );
}

const ConnectButtonStyle = styled.button`
    background: #FF00FF;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 9px;
    padding: 15px 20px;
    cursor: pointer;
    &:hover{
        background: #FF00FF;
        opacity: 0.8;
    }

`;