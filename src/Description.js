import React from "react";

const Description = ({
alturapoke,
pesopoke,
}) => {
return (
	<div>
	<p><b>Altura:</b><b>{alturapoke * 10} cm.</b></p>
	<p><b>Peso: </b><b>{pesopoke * 0.1} kg</b></p>
	</div>
);
};
export default Description;
