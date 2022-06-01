import React, { useContext } from 'react';
import _ from "lodash";
import { useParams, Link } from "react-router-dom";

function Detalhes(props) {
    const [state, dispatch] = useContext(ContactContext);
    let { id } = useParams();

    let contato = state.contacts.find(element => element.id == id);
    return (
        <div>
            <h1>Detalhes</h1>
            <p>Pokemon id: {res.id}</p>
            <p>Nome: {res.name}</p>
            <p>Pontos de Experiência: {res.base_experience}</p>
        </div>
    )
}
export default Detalhes;