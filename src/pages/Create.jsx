export default function Create() {
  return (
    <div>
      <h1>Criar Devmon</h1>
			
      <form>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label htmlFor="imagem">URL da imagem</label>
          <input
            type="text"
            name="imagem"
            id="imagem"
            placeholder="Digite a URL da imagem"
          />
        </div>

        <div>
          <label htmlFor="categoria">Categoria (opcional)</label>
          <input
            type="text"
            name="categoria"
            id="categoria"
            placeholder="Digite a categoria"
          />
        </div>

				<div><input type="submit" value="Cadastrar" /></div>
      </form>
    </div>
  );
}
