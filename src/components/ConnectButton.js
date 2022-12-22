import styled from "styled-components";

export default function ConnectButton(){
    return(
        <ConnectButtonStyle>
            Conecte sua carteira
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