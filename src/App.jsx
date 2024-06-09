import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Api } from "./api/api";
import Card from "./components/Card/Card";

function App() {
  const [devmons, setDevmons] = useState([]);

  async function fetchData() {
    const apiUrl = Api.personagem.readAll();
    // console.log(apiUrl);
    const response = await Api.buildApiGetRequest(apiUrl);
    if (response.ok) {
      const data = await response.json();
      setDevmons(data);
    } else {
      toast.error("Erro ao carregar lista de Devmons.");
    }
  }

  // Chama API só 1X
  useEffect(function () {
    fetchData();
  }, []);

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />;
        })}
      </div>
      <ToastContainer />
    </>
  );
}
export default App;
