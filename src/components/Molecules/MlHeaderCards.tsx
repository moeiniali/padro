import React from 'react'
import { AtomImage, AtomText } from '../ExAllCo';

type MyComponentProps = {

  titleI?: string | undefined,
  titleII?: string | undefined,
  Link?: string | undefined,
  Element?: string | null
  href?: string
  onClick?: () => void
}

const MlHeaderCards: React.FC<MyComponentProps> = ({ titleII, titleI, Link, Element, href, onClick }) => {
  const handlerElem = (Element: string) => {
    switch (Element) {
      case 'login':
        return (
          <div className='w-full h-auto flex gap-4 flex-col  items-center justify-center text-center mb-4'>
            <AtomImage src='/images/LogoType.svg' width={80} height={36} />
            <AtomText Element="p" children={titleI} size={16} weight='500' color="#313235" className='mb-2' />
            <AtomText Element="p" children={titleII} size={14} weight='400' color="#7E838F" className='mb-2' />
          </div >
        )
      case 'otp':
        return (

          <div className='w-full h-auto flex gap-4 flex-col  items-center justify-center text-center  mb-4'>
            <div className=' w-full flex justify-between items-center '>
              <AtomImage src='/images/LogoType.svg' width={80} height={36} className='m-auto' />
              <AtomImage onClick={onClick} src='/images/Button.png' width={24} height={24} className=' hover:scale-105 cursor-pointer duration-500' />
            </div>
            <AtomText Element="p" children={titleI} size={16} weight='500' color="#313235" className='mb-2' />
            <AtomText Element="p" children={titleII} size={14} weight='400' color="#7E838F" className='mb-2' />
            <AtomText href={href} Element="link" children={Link} size={14} weight='500' color="#1043A6" className='mb-2 border-b hover:scale-95 cursor-pointer duration-500' />
          </div>
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

export default MlHeaderCards;