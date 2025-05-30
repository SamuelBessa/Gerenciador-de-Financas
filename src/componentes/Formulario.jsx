function Formulario({ income, onAddIncome, descricao, valor, setDescricao, entrada, setValor, setEntrada }) {

    return (
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
    )
}

export default Formulario;