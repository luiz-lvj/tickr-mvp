import { TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import listTickets from "../tickets/listTickets.json";
const fs = require("fs");

export default function Emit(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [organization, setOrganization] = useState("");
    const [eventDate, setEventDate] = useState(new Date());
    const [eventTimeBegin, setEventTimeBegin] = useState(new Date());
    const [eventTimeEnd, setEventTimeEnd] = useState(new Date());

    const [image, setImage] = useState("");

    async function saveData(event){
        event.preventDefault();
        const NFTdata = {
            title,
            description,
            price,
            quantity,
            organization,
            eventDate,
            eventTimeBegin,
            eventTimeEnd,
            image
        }

        //create file with NFT data;
        const numTickets = listTickets.length;
        const newName = "../tickets/" + String(numTickets + 1) + ".json"
        try{
            fs.writeFile(newName, JSON.stringify(NFTdata), (err) => {
                if (err) {
                    console.log(err);
                }
            });
            setTitle("");
            setDescription("");
            setPrice(0);
            setQuantity(0);
            setOrganization("");
            setEventDate(new Date());
            setEventTimeBegin(new Date());
            setEventTimeEnd(new Date());
            setImage("");

        } catch (err) {
            alert("Não foi possível salvar os dados do ingresso!");
            console.log(err);
            return;
        }

        
    }
    
    return(
        <EmitStyle>
            <Header/>
            <FormStyle onSubmit={  e => saveData(e) }>
                <TextField
                    id="outlined-basic"
                    label="Título"
                    variant="outlined"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <TextField 
                    id="outlined-basic"
                    label="Descrição"
                    variant="outlined"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Preço"
                    variant="outlined"
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Organização"
                    variant="outlined"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Data do evento"
                    variant="outlined"
                    type="date"
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Horário de início"
                    variant="outlined"
                    type="time"
                    value={eventTimeBegin}
                    onChange={e => setEventTimeBegin(e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Horário de término"
                    variant="outlined"
                    type="time"
                    value={eventTimeEnd}
                    onChange={e => setEventTimeEnd(e.target.value)}
                />

                <TextField

                    id="outlined-basic"
                    label="Link Imagem"
                    variant="outlined"
                    type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Quantidade de ingressos"
                    variant="outlined"
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />

                <button type="submit" onClick={ e => saveData(e)}>Emitir ingressos</button>
            </FormStyle>
        </EmitStyle>
    );
}

const EmitStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    position: fixed;
    top: 90px;
    height: 630px;
    margin-bottom: 30px;
    button {
        width: 100%;
        background: #FF00FF;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20px;
        border: none;
        height: 50px;
        margin-top: 10px;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }

    }
`;