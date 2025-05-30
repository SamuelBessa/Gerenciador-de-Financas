import { CircleArrowDown, CircleArrowUp } from "lucide-react";

function Description({ income }) {

    function IconTipo({ entrada }) {
        return entrada ? (
            <div className="flex justify-center text-green-700">
                <CircleArrowUp className="w-5 h-5" />
            </div>
        ) : (
            <div className="flex justify-center text-red-700">
                <CircleArrowDown className="w-5 h-5" />
            </div>
        );
    }

    return (
        <ul className="w-full max-w-screen-lg mx-auto bg-white">
            <li className="grid grid-cols-3 text-center border-b-2 py-2 font-semibold text-slate-700 text-sm sm:text-base">
                <p>Descrição</p>
                <p>Valor</p>
                <p>Tipo</p>
            </li>

            {income.map((item) => (
                <li
                    key={item.id}
                    className="grid grid-cols-3 text-center py-2 items-center text-sm sm:text-base"
                >
                    <p>{item.descricao}</p>
                    <p>
                        {item.valor.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                    <IconTipo entrada={item.entrada} />
                </li>
            ))}
        </ul>
    );
}

export default Description;