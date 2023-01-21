interface ISizeProps {
  size: number;
}

const Size = (props: ISizeProps) => {
  const size = props.size

  return (
    <span className='border-2 border-solid border-gray-200 px-4 py-2 flex items-center justify-center cursor-pointer transition duration-200 hover:border-black text-sm'>
      {size}
    </span>
  )
}

export default Size