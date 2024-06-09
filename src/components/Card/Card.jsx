import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      {/* <h1>{props.nome}</h1> - Ítens sendo recebidos separados*/}
      <h2>{props.item.nome}</h2>
      <img src={props.item.imagem} alt="" width={"100px"} />
    </div>
  );
}
