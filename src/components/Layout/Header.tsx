import { useState } from "react"
import FloatingLabelInput from "./FloatingInput"
import Input from "./input"
import LinkHeader from "./LinkHeader"
import { iconeUsuario, iconeCarrinho } from "../../icons"

interface HeaderProps {
    icone: any
    urlImagem: string
}

export default function Header(props: HeaderProps) {
    return (
        <header className="bg-gray-100 w-full h-16 sm:h-20 flex items-center shadow-md">
            <div className="xl:hidden w-1/5 flex justify-center">
                <div className="h-1/4 w-1/4">
                    {props.icone}
                </div>
            </div>
            <div className="md:w-1/5 w-3/5 flex justify-center">
                <img src={props.urlImagem} alt="logo" className="md:pl-2 md:w-60 2xl:w-2/3" />
            </div>
            <div className="hidden xl:flex flex-grow md:pr-5 lg:pr-10 gap-5 items-center justify-end h-full">
                <FloatingLabelInput labelName="Entrega"/>
                <Input placeholder="Busque por estabelecimento ou produtos"/>
                <LinkHeader icone={iconeUsuario} nome="Entrar"/>
                <LinkHeader icone={iconeCarrinho} nome="Carrinho"/>
            </div>
        </header>
    )
}