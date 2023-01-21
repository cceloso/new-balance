interface IButtonProps {
  text: string;
  styles?: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button className={`bg-nb-red px-14 py-4 text-sm font-bold transition duration-300 hover:bg-[#B90020] text-white ${props.styles}`}>
      {props.text}
    </button>
  )
}

export default Button