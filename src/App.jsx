import Description from "./componentes/Description"
import { v4 } from "uuid";
import { useState } from "react";
import Resumo from "./componentes/Resumo";

function App() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [entrada, setEntrada] = useState(true);

  const [income, setIncome] = useState([]);

  function onAddIncome(e) {
    e.preventDefault();

    if (!descricao.trim() || !valor.trim()) {
      return alert("Preenche a descrição e o valor.")
    }

    const newIncome = {
      id: v4(),
      descricao,
      valor: Number(valor),
      entrada,
    };
    setIncome([...income, newIncome]);
    setDescricao("");
    setValor("");
    setEntrada(true);
  }

  return (
    <div className="bg-slate-600 min-h-screen w-full">
      <div className="p-6 bg-slate-700 text-center">
        <h1 className="text-2xl sm:text-3x font-bold text-white">Gerenciador de Finanças</h1>
      </div>

      <Resumo income={income}/>

      <form
        className="bg-white px-3 py-5 flex flex-col sm:flex-row flex-wrap gap-4 justify-center rounded-md max-w-screen-lg mx-auto"
        onSubmit={onAddIncome}>

        <input
          className="rounded-md border border-slate-400 p-2 w-full sm:w-[45%] md:w-[30%]"
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <input
          className="rounded-md border border-slate-400 p-2 w-full sm:w-[45%] md:w-[30%]"
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="tipo"
              value="true"
              checked={entrada === true}
              onChange={(e) => setEntrada(e.target.value === "true")}
            />
            Entrada
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="tipo"
              value="false"
              checked={entrada === false}
              onChange={(e) => setEntrada(e.target.value === "true")}
            />
            Saida
          </label>
        </div>

        <button
          type="submit"
          className="bg-slate-700 text-white rounded-md py-2 px-4 font-semibold hover:bg-slate-600 w-full sm:w-auto">
          Adicionar
        </button>
      </form>

      <div className="max-w-screen-lg mx-auto p-4">
        <Description income={income} />
      </div>
    </div>
  )
}

export default App
