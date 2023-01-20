interface IContainerProps {
  styles?: string;
  children: React.ReactNode;
}

const Container = (props: IContainerProps) => {
  return (
    <div className={`px-6 ${props.styles}`}>
      {props.children}
    </div>
  )
}

export default Container