import React, { useState } from "react";
import Description from "./Description";

const PokemonFicha = ({
  name,
  type,
  altura,
  peso,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <h4>{name.toUpperCase()}</h4>
        <p>Type : {type} </p> 
        <button onClick={() => setShow(!show)}>
          {show === true ? "Ocultar detalhes" : "Ver detalhes"}
        </button>
        {show === true ? (
          <Description
            pesopoke={peso}
            alturapoke={altura}
          />
        ) : (
          <></>
        )}
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
export default PokemonFicha;
