import { iconeMais, iconeMenos } from "../../icons"

interface BotaoItemProps {
    variavel: any
    novoValor: (novoValor: any) => void
}

export default function BotaoItem(props: BotaoItemProps) {
    const adicionar = () => {
        if (props.variavel === 8) {
            return false
        }

        props.novoValor(props.variavel + 1)
    }

    const substrair = () => {
        if (props.variavel === 0) {
            return false
        }

        props.novoValor(props.variavel - 1)
    }

    return (
        <div className="border border-[#F09035] w-24 h-8 rounded-[5px] flex items-center justify-evenly cursor-pointer">
            <span className="w-5 h-5 text-[#D80000]" onClick={substrair}>
                {iconeMenos}
            </span>
            <span>
                {props.variavel}
            </span>
            <span className="w-5 h-5 text-[#D80000] cursor-pointer" onClick={adicionar}>
                {iconeMais}
            </span>
        </div>
    )
}