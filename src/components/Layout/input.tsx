interface InputProps {
    placeholder: string
}
export default function Input(props: InputProps) {
    return (
        <input className="w-2/5 text-[14px] text-[#656363] pl-5 h-12 border border-[#D80000] outline-[#D80000] rounded-[5px]" placeholder={props.placeholder}/>
    )
}