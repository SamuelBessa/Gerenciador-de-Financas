import Description from "./componentes/Description"
import { v4 } from "uuid";
import { useState } from "react";
import Resumo from "./componentes/Resumo";
import Formulario from "./componentes/Formulario";

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
      <Formulario
        income={income}
        onAddIncome={onAddIncome}
        descricao={descricao}
        setValor={setValor}
        valor={valor}
        setDescricao={setDescricao}
        entrada={entrada}
        setEntrada={setEntrada}
      />

      <div className="max-w-screen-lg mx-auto p-4">
        <Description income={income} />
      </div>
    </div>
  )
}

export default App;
