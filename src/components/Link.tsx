interface ILinkProps {
  text: string;
  underlineColor?: string;
  otherStyles?: string;
}

const Link = (props: ILinkProps) => {
  const underlineColor = props.underlineColor ? `hover:border-[${props.underlineColor}]` : 'hover:border-black';
  const otherStyles = props.otherStyles ? props.otherStyles : '';
  console.log(underlineColor);

  return (
    <a className={`cursor-pointer border-b-2 border-transparent transition duration-150 ${underlineColor} ${otherStyles}`}>
      {props.text}
    </a>
  )
}

export default Link