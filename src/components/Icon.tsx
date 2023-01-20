interface IIconProps {
  children: React.ReactNode;
}

const Icon = (props: IIconProps) => {
  return (
    <div className='w-10 h-10 mx-1 rounded-full bg-[#c00] flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:scale-110'>
      {props.children}
    </div>
  )
}

export default Icon