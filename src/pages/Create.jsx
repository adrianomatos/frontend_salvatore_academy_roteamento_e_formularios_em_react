import { Api } from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Create.css";

export default function Create() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const devmon = {
      nome: event.target.nome.value,
      imagem: event.target.imagem.value,
      categoria: event.target.categoria.value,
    };

    const apiUrl = Api.personagem.create();
    const response = await Api.buildApiPostRequest(apiUrl, devmon);

    if (response.ok) {
      toast.success("DevMon criado com sucesso! ");
      navigate("/");
    } else {
      const body = await response.json();
      toast.error("Erro ao criar DevMon: " + body.error);
    }
  }

  return (
    <div className="formulario">
      <h1>Cadastrar Curso</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <input
            type="text"
            name="imagem"
            id="imagem"
            placeholder="Digite a URL da imagem"
          />
        </div>

        <div>
          <input
            type="text"
            name="categoria"
            id="categoria"
            placeholder="Digite a categoria (opcional)"
          />
        </div>

        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
