interface ILinkProps {
  text: string;
  underlineColor?: string;
  styles?: string;
}

const CustomLink = (props: ILinkProps) => {
  const underlineColor = props.underlineColor ? 'hover:border-nb-red' : 'hover:border-black';
  const styles = props.styles ? props.styles : '';
  console.log(underlineColor);

  return (
    <a className={`cursor-pointer border-b-2 border-transparent transition duration-150 ${underlineColor} ${styles} w-fit`}>
      {props.text}
    </a>
  )
}

export default CustomLink