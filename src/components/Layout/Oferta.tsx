interface OfertaProps {
    urlImagem: string
    titulo: string
    descricao: string
    valor: string
    valorTachado: string
}

export default function Oferta(props: OfertaProps) {
    return (
        <section className="m-5 flex flex-col justify-center items-center w-[90%] lg:w-2/4">
             <div className="mb-5">
                <img 
                    src={props.urlImagem} 
                    alt="imagem oferta"

                    className="w-[150px] h-[116px] md:w-[580px] md:h-[300px] xl:w-[590px] xl:h-[380px]"
                />
            </div>
            <div>
                <h2 className="text-[18px] md:text-[24px] xl:text-[28px] text-[#4E4E4E] font-bold mb-5">{props.titulo}</h2>
                <p className="text-[16px] xl:text-[20px] line-[18px] text-[#4E4E4E] mb-5">{props.descricao}</p>
                <div>
                    <span className="text-[#E49700] lg:text-[24px] xl:text-[32px] xl:mr-4 mr-2">
                        R${props.valor}
                    </span>
                    <span className="text-[#4E4E4E] lg:text-[24px] xl:text-[32px] line-through">
                        R${props.valorTachado}
                    </span>
                </div>
            </div>
        </section>  
    )
}