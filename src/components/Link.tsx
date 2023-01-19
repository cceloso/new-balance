interface LinkProps {
  text: string;
  underlineColor?: string;
  otherStyles?: string;
}

const Link = (props: LinkProps) => {
  const underlineColor = props.underlineColor ? `[${props.underlineColor}]` : 'black';
  console.log(underlineColor);

  return (
    <a className={`cursor-pointer border-b-2 border-transparent transition duration-150 hover:border-${underlineColor} ${props.otherStyles}`}>
      {props.text}
    </a>
  )
}

export default Link