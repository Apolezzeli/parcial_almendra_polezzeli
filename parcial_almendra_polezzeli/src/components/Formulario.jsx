import { useState } from "react";
import Card from "./Card";

function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [fruitName, setFruitName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (
            firstName.startsWith(" ") ||
            firstName.length < 3 ||
            fruitName.length < 6
        ) {
            props.onError();
            console.log();
        } else {
            props.onSubmit(firstName, fruitName);
        }
    }

    return (
        <Card title="Ingresa una marca de autos">
            <form onSubmit={handleSubmit}>
                <p>Escribe tu nombre</p>
                <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    value={firstName}
                />
                <p>Escribe una marca de autos</p>
                <input
                    onChange={(e) => setCarBrandName(e.target.value)}
                    type="text"
                    value={carBrandName}
                />
                <button type="submit">Enviar</button>
            </form>
        </Card>
    );
}

export default Form;