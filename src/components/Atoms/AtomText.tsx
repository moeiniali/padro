import React from 'react'
import { Link } from 'react-router-dom'

type MyComponentProps = {
  weight?: string | undefined
  size?: number | string | undefined
  children?: number | string | undefined
  className?: string | undefined,
  color?: string | undefined
  href?: any
  lineHeight?: string
  value?: string
  Element?: string | null
}

const AtomText: React.FC<MyComponentProps> = ({ Element, className, weight, color, size, children, lineHeight, href, value }) => {

  const handlerElem = (Element: string) => {
    switch (Element) {
      case 'p':
        return (<>
          <p className={className}
            style={{ fontSize: size || '14', fontWeight: weight || '400', lineHeight: lineHeight || '12px', color: color || 'white' }}>
            {children}
          </p>
        </>
        )
      case 'link':
        return (
          <>
            <Link to={href} style={{ fontSize: size || '14', fontWeight: weight || '400', lineHeight: lineHeight || '12px', color: color || 'white' }}>{children}</Link>
          </>
        )
      case 'ip':
        return (
          <>
            <p className={className}
              style={{ fontSize: size || '14', fontWeight: weight || '400', lineHeight: lineHeight || '12px', color: color || 'white' }}>
              {children}: <span className='text-base font-medium text-[#313235] ss01'>{value}</span>
            </p>
          </>
        )

      default:
        break;
    }
  }


  return (
    <>


      {handlerElem(Element || '')}
    </>
  )
}

export default AtomText