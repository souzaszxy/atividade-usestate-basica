
import { useState } from "react";
import "./App.css";

function App() {
  // Missão 1: Contador com meta
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) =>
      valorAnterior < 10 ? valorAnterior + 1 : valorAnterior
    );
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  // Missão 2: Mostrar e esconder aviso
  const [visivel, setVisivel] = useState(false);

  // Missão 3 e desafio final: Saudação
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <main className="container">
      <h1>Atividades de React</h1>
      <p className="subtitulo">
        Praticando estados, eventos e componentes.
      </p>

      {/* Missão 1 */}
      <section className="cartao">
        <h2>Missão 1 — Contador</h2>

        <p className="numero">Valor atual: {contador}</p>

        <div className="botoes">
          <button onClick={aumentar}>Aumentar</button>
          <button onClick={diminuir}>Voltar um</button>
          <button onClick={() => setContador(0)}>
            Zerar contador
          </button>
        </div>

        {contador === 10 && (
          <p className="sucesso">Meta atingida!</p>
        )}
      </section>

      {/* Missão 2 */}
      <section className="cartao">
        <h2>Missão 2 — Aviso</h2>

        <button onClick={() => setVisivel(!visivel)}>
          Alternar aviso
        </button>

        {visivel && (
          <p className="aviso">O aviso está visível.</p>
        )}
      </section>

      {/* Missão 3 */}
      <section className="cartao">
        <h2>Missão 3 — Saudação</h2>

        <label htmlFor="nome">Digite seu nome:</label>

        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Seu nome aqui"
        />

        <p>Olá, {nome || "visitante"}!</p>
      </section>

      {/* Desafio final */}
      <section className="cartao">
        <h2>Desafio final — Boas-vindas</h2>

        <p>Digite seu nome no campo acima para personalizar a saudação.</p>

        <button
          onClick={() => setMostrarSaudacao(!mostrarSaudacao)}
        >
          {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
        </button>

        {mostrarSaudacao && (
          <p className="saudacao">
            Olá, {nome || "visitante"}! Seja bem-vindo(a)!
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
