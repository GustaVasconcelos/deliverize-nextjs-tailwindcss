interface LinkHeaderProps {
    icone: any
    nome: string
}

export default function LinkHeader(props: LinkHeaderProps) {
    return (
        <a className="flex gap-2 items-center text-[#ED3237] cursor-pointer">
            <span className="w-8 h-8">
                {props.icone}
            </span>
            <span className="text-[16px] hidden lg:block">
                {props.nome}
            </span>
        </a>
    )
}