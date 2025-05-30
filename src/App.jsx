import { CircleArrowDown, CircleArrowUp, Wallet } from "lucide-react"
import Description from "./componentes/Description"
import { v4 } from "uuid";
import { useState } from "react";

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

  //Calculos
  const totalEntradas = income
    .filter(item => item.entrada)
    .reduce((acc, curr) => acc + curr.valor, 0);

  const totalSaidas = income
    .filter(item => !item.entrada)
    .reduce((acc, curr) => acc + curr.valor, 0);

  const totalGeral = totalEntradas - totalSaidas;

  //Formatação
  const formatarValor = (valor) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="bg-slate-600 min-h-screen w-full">
      <div className="p-6 bg-slate-700 text-center">
        <h1 className="text-2xl sm:text-3x font-bold text-white">Gerenciador de Finanças</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-4 max-w-screen-lg mx-auto">
        <div className="p-6 bg-white rounded-md w-full sm:w-[45%] md:w-[30%] text-center">
          <p className="flex justify-center items-center gap-2 font-medium text-slate-800 mb-2">
            Entradas
            <CircleArrowUp />
          </p>

          <output className="font-semibold text-lg text-green-600">{formatarValor(totalEntradas)}</output>
        </div>

        <div className="p-6 bg-white rounded-md w-full sm:w-[45%] md:w-[30%] text-center">
          <p className="flex justify-center items-center gap-2 font-medium text-slate-800 mb-2">
            Saidas
            <CircleArrowDown />
          </p>

          <output className="font-semibold text-lg text-red-600">{formatarValor(totalSaidas)}</output>
        </div>

        <div className="p-6 bg-white rounded-md w-full sm:w-[90%] md:w-[30%] text-center">
          <p className="flex justify-center items-center gap-2 font-medium text-slate-800 mb-2">
            Total
            <Wallet />
          </p>

          <output className="font-semibold text-lg text-blue-600">{formatarValor(totalGeral)}</output>
        </div>
      </div>

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
