import CustomLink from './CustomLink'

interface IFooterColumnProps {
  col: IFooterColumn;
}

const FooterColumn = (props: IFooterColumnProps) => {
  const col = props.col

  return (
    <div className='flex flex-col mb-4 lg:mb-0'>
      <span className='mb-4 font-bold'>{col.heading}</span>
      {col.items.map((item: IFooterLink) => (
        <CustomLink text={item.label} key={item.label} styles='mb-4' />
      ))}
    </div>
  )
}

export default FooterColumn