import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Home(){
    return(
        <HomeStyle>
            <Header/>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
`;