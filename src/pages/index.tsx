import { iconeFlechaEsquerda } from "../icons";
import Header from "../components/Layout/Header";
import Oferta from "../components/Layout/Oferta";
import Formulario from "../components/Layout/Formulario";

export default function Home() {
    return (
        <div className="flex flex-col items-center h-screen">
            <Header icone={iconeFlechaEsquerda} urlImagem={'/images/Deliverize.svg'}/>
            <div className="flex justify-between items-center flex-col xl:flex-row w-[95%]" style={{ height: 'calc(100vh - 60px)' }}>
                <Oferta 
                    urlImagem={'/images/Hamburguer.svg'} 
                    titulo="Oferta picanha cheddar bacon" 
                    descricao="Delicioso hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim, acompanhamento e bebida."
                    valor="31,99"
                    valorTachado="34,95"
                />
                <Formulario qtdIngredientes={8}/>
            </div>
        </div>
    )
}
