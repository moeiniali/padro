import React from 'react'

type Props = {
 src?: string | undefined
 className?: string | undefined
 width?: string | number | undefined
 height?: string | number | undefined
 onClick?: () => void
}

const AtomImage = (props: Props) => {



 return (
  <>
   <img onClick={props.onClick} className={props.className} src={props.src} width={props.width} height={props.height} alt="icons" />
  </>
 )
}

export default AtomImage