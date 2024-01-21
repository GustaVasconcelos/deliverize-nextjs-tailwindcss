import { useState } from "react"
import FormularioItem from "./FormularioItem"
import BotaoItem from "./BotaoItem"

interface FormularioProps {
    qtdIngredientes: number
}

export default function Formulario(props: FormularioProps) {
    const [queijoCheddar, setQueijoCheddar] = useState(0)
    const [cebolaCrispy, setCebolaCrispy] = useState(0)
    const [molhoCheddar, setMolhoCheddar] = useState(0)
    const [molhoPicanha, setMolhoPicanha] = useState(0)
    const [qtd, setQtd] = useState(0)
    
    const items = [
        {
            nome:"Queijo cheddar",
            preco:"4,99",
            variavel:queijoCheddar,
            novoValor:setQueijoCheddar
        },
        {
            nome:"Cebola crispy",
            preco:"1,50",
            variavel:cebolaCrispy,
            novoValor:setCebolaCrispy
        }, 
        {
            nome:"Molho cheddar",
            preco:"3,50",
            variavel:molhoCheddar,
            novoValor:setMolhoCheddar
        },
        {
            nome:"Molho picanha",
            preco:"3,50",
            variavel:molhoPicanha,
            novoValor:setMolhoPicanha
        }
    ]

    const renderizarItems = () => {
        return items.map((item, index) => (
            <FormularioItem key={index} nome={item.nome} preco={item.preco} variavel={item.variavel} novoValor={item.novoValor} />
        ))
    }

    return (
        <section className="m-5 flex justify-center items-center w-[90%] xl:w-2/5">
            <div className="xl:border rounded-[8px] border-solid border-[#686868] mb-6 xl:mb-0 xl:p-8 w-full xl:h-auto">
                <div className="p-2 w-full h-14 bg-[#FDD70E33] mb-1">
                    <p className="text-[14px] line-[16px] text-[#4E4E4E] font-medium">
                        Adicionar Ingredientes
                    </p>
                    <p className="text-[12px] line-[20px] text-[#E49700]">
                        Até {props.qtdIngredientes} ingredientes
                    </p>
                </div>
        
                {renderizarItems()}

                <div className="p-2 w-full h-14 bg-[#FDD70E33] my-1">
                    <p className="text-[14px] line-[16px] text-[#4E4E4E] font-medium">
                        Precisa de talher?
                    </p>
                </div>
                <div>
                    <div className="mt-2 flex justify-between">
                        <p className="text-[14px] line-[16px] text-[#4E4E4E]">Sim</p>
                        <input type="radio" name="talheres" className="custom-radio"/>
                    </div>
                    <div className="mt-2 flex justify-between">
                        <p className="text-[14px] line-[16px] text-[#4E4E4E]">Não</p>
                        <input type="radio" name="talheres" className="custom-radio"/>
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <BotaoItem variavel={qtd} novoValor={setQtd}/>
                    <button className="bg-[#F09035] w-52 text-white rounded-[5px] text-[14px] cursor-pointer">
                        Adicionar
                    </button>
                </div>
            </div>
        </section>
    )
}