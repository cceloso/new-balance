interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button className='bg-nb-red px-14 py-4 text-sm font-bold'>
      {props.text}
    </button>
  )
}

export default Button