import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ConnectButton from "./ConnectButton";


export default function Header(){
    const history = useNavigate();
    return(
        <HeaderStyle>
        <h1 onClick={() => history("/")}
        >Tick<span>r</span></h1>
        <HeaderButtons>
            <h2  onClick={() => history("/emit")} >Emitir Ingressos</h2>
            <ConnectButton/>
        </HeaderButtons>
        </HeaderStyle>
    );
}

const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;

    h2{
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
`;

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: #000000;
    border-bottom: 1px solid #ffffff;
    padding-left: 5%;
    padding-right: 5%;
    h1{
        color: #FFFFFF;
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
        span{
            color: #FF00FF;
        }
    }
`