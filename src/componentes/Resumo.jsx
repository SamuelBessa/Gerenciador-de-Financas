import { CircleArrowDown, CircleArrowUp, Wallet } from "lucide-react";

function Resumo({ income }) {

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
    )
}

export default Resumo;