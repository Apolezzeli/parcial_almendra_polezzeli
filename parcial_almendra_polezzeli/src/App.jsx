import Header from "./component/Header";
import Form from "./component/Form";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [carBrandName, setCarBrandName] = useState("");
  const [error, setError] = useState("");
  function handleFavorite(firstName, carBrandName) {
    const newName = firstName;
    const newCarBrandName = carBrandName;
    setFirstName(newName);
    setCarBrandName(newCarBrandName);
  }

  return (
    <div>
      <Header title="Frutas" />
      <Form
        onError={() =>
          setError("Por favor chequea que la información sea correcta")
        }
        onSubmit={handleFavorite}
      />
      {error}
      <hr />
      <h2>Hola {firstName}</h2>
      <p>Sabemos que tu fruta favorita es {fruitName}</p>
    </div>
  );
}

export default App;