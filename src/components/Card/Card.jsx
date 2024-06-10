import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      {/* <h1>{props.nome}</h1> - Ítens sendo recebidos separados*/}
      <h3>{props.item.nome}</h3>
      <img src={props.item.imagem} alt="" width={"100px"} />
      <h6>{props.item.categoria}</h6>
    </div>
  );
}
