import styled from "styled-components";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import Web3Context from "../contexts/Web3Context";
import axios from "axios";
import { EmitTicketABI, EmitTicketAddress } from "../constants";


export default function MyTickets(){

    const {web3Provider, address} = useContext(Web3Context);

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const getTickets = async () => {
            let ticketsLinks = [];
            if(address == ""){
                return;
            }
            const url = "https://extendsclass.com/api/json-storage/bin";
            const headers = {
                "Secure-Key": process.env.REACT_APP_EXTENDKEY,
            }


            const contractInstance = new web3Provider.eth.Contract(EmitTicketABI, EmitTicketAddress);
            const ticketsBalance = await contractInstance.methods.balanceOf(address).call(
                {from: address}
            );
            console.log(ticketsBalance)

            //array of size ticketsBalance
            const ticketsArray = Array.from({length: ticketsBalance}, (_, i) => 0);

            await Promise.all(
                ticketsArray.map(async (_, idx) => {
                    const ticketId = await contractInstance.methods.tokenOfOwnerByIndex(address, idx).call(
                        {from: address}
                    );
                    const ticketData = await contractInstance.methods.tokenURI(ticketId).call(
                        {from: address}
                    );
                    ticketsLinks.push( url + "/" + ticketData);
                })
            );
            
            let ticketsData = [];
            await Promise.all(
                ticketsLinks.map(async (link) => {
                    const response = await axios.get(link, {headers: headers});
                    ticketsData.push(response.data);
                })
            );
            console.log(ticketsData);
            setTickets(ticketsData);
        }
        getTickets();
    }, [address]);
            



    return(
        <MyTicketStyle>
            <Header/>
                <QuantityStyle>Quantidade de ingressos: {tickets.length}</QuantityStyle>
            <TicketStyle>
                
                {tickets.map((ticket, idx) => {
                    return(
                        <TicketCardStyle key={idx}>
                            <img src={ticket.image} alt="ticket"/>
                            <h1>Evento: {ticket.title}</h1>
                            <p>Descrição: {ticket.description}</p>
                            <p> Preço: {ticket.price}</p>
                            <p>Organizadora: {ticket.organization}</p>
                            <p>Data: {ticket.eventDate}</p>
                            <p>Início: {ticket.eventTimeBegin}</p>
                            <p>Fim: {ticket.eventTimeEnd}</p>
                            
                        </TicketCardStyle>
                    );
                })}
            </TicketStyle>
        </MyTicketStyle>
    );
}

const QuantityStyle = styled.h1`
    display: block;
    position: fixed;
    top: 110px;
    margin-left: 10px;
`;

const MyTicketStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
`;

const TicketStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    flex-wrap: wrap;
    margin-top: 250px;

`;

const TicketCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1{
        font-size: 20px;
        font-weight: bold;
    }
    img{
        width: 300px;
        height: 400px;
        margin-bottom: 10px;
    }
`;