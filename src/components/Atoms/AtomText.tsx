import React from 'react'

type Props = {
 weight?: string | undefined
 size?: number | string | undefined
 children?: number | string | undefined
 className?: string | undefined,
 color?: string | undefined
}

const AtomText = (props: Props) => {
 return (
  <>
   <p className={props.className}
    style={{ fontSize: props.size || '14', fontWeight: props.weight || '400', lineHeight: '12px', color: props.color || 'white' }}>
    {props.children}
   </p>
  </>
 )
}

export default AtomText