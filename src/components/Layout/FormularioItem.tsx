import BotaoItem from "./BotaoItem"

interface FormularioItemProps {
    nome: string
    preco: string
    variavel: any
    novoValor: (novoValor: any) => void
}

export default function FormularioItem(props: FormularioItemProps) {
    return (
        <div className="p-2">
            <p className="text-[14px] text-[#4e4e4e] font-medium line-[16px]">{props.nome}</p>
            <div className="flex justify-end">
                <BotaoItem variavel={props.variavel} novoValor={props.novoValor}/>
            </div>
            <p className="text-[14px] text-[#F09035] font-normal line-[16px]">+ R${props.preco}</p>
            <hr className="border-t-1 border-[#E8A634] mt-1" />
        </div>
    )
}