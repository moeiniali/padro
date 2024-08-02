import React from 'react'

type Props = {
 src?: string | undefined
 className?: string | undefined
 width?: string | number | undefined
 height?: string | number | undefined
}

const AtomImage = (props: Props) => {



 return (
  <>
   <img className={props.className} src={props.src} width={props.width} height={props.height} alt="icons" />
  </>
 )
}

export default AtomImage