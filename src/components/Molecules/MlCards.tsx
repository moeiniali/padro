import React from 'react'
import { AtomImage, AtomText } from '../ExAllCo';
import { json } from 'stream/consumers';

type MyComponentProps = {
  Element?: string | undefined,
  live?: string | undefined,
  liveVal?: number | undefined,
  monitored?: string | undefined,
  monitoredVal?: number | undefined,
  total?: number | undefined,
  bgColor?: string | undefined,
  img?: string | undefined,
  title?: string | undefined,
  ips?: string | undefined,
  ipsVal?: number | undefined,
  ports?: string | undefined,
  portsVal?: number | undefined,
  vulns?: string | undefined,
  vulnsVal?: number | undefined,
  counterLived?: number[] | undefined
  currentmonitored?: number[] | undefined
}

const MlCards: React.FC<MyComponentProps> = (props) => {
  // const counter = [20, 40, 45, 2, 33, 5]
  const handlerElem = (Element: string) => {
    switch (Element) {
      case 'TopElem':
        return (
          <div className='w-full h-auto flex gap-4 flex-col '>
            <div className='w-full h-auto flex  justify-between items-start' >
              <div style={{ backgroundColor: props.bgColor }}
                className='w-12 h-auto flex flex-col items-center justify-center pt-1  rounded-lg gap-1'>
                <AtomImage src={props.img} width={27} height={27} />
                <div className='w-full h-4 z-[900] rounded-b-lg bg-white text-center  flex items-center  justify-center'  >
                  <AtomText children={props.total} size="14px" weight="500" color='#000' />
                </div>
              </div>
              <AtomImage src='/images/Down Left Arrow.svg' width={20} height={20} />
            </div>
            <div>
              <AtomText children={props.title} size={14} weight='400' className='mb-2' />
              <div className='w-full h-[0.5px] bg-gray-400'></div>
            </div>

          </div>
        )
      case 'centerElem':
        return (
          <>

            <div className='w-full h-auto flex justify-between items-start'>

              <div className='flex flex-row gap-2 items-center'>
                <div className='flex flex-col gap-1 items-start justify-center'>
                  <AtomText children={props.live} size={14} weight='500' />
                  <AtomText children={props.liveVal} size={14} weight='700' />
                </div>
                <div className='w-[60px] max-h-[30px] flex flex-row flex-nowrap gap-1 items-end justify-center overflow-hidden '>
                  {props?.counterLived?.map((item: number, index) => {
                    let str: string = String(item);
                    return (
                      <div key={index} style={{ height: `${str}px` }} className={`bg-blue-500 w-1   rounded-full`}></div>
                    );
                  })}
                </div>

              </div>

              <div className='flex flex-row gap-2 items-center'>
                <div className='flex flex-col gap-1 items-start justify-center'>
                  <AtomText children={props.monitored} size={14} weight='500' />
                  <AtomText children={props.monitoredVal} size={14} weight='700' />
                </div>
                <div className='w-[60px] max-h-[30px] flex flex-row flex-nowrap gap-1 items-end justify-center overflow-hidden '>
                  {props?.currentmonitored?.map((item: number, index) => {
                    let str: string = String(item);
                    return (
                      <div key={index} style={{ height: `${str}px` }} className={`bg-blue-500 w-1   rounded-full`}></div>
                    );
                  })}
                </div>
              </div>

            </div >
            <div className='w-full h-[0.5px] bg-gray-400'></div>
          </>
        )
      case 'bottomElem':
        return (
          <div className='w-full h-auto flex justify-between items-start'>
            {/* globe icon --------------------------------------------- */}
            <div className='flex flex-row flex-wrap gap-2'>
              <div className='w-10 h-10 bg-[#327794] rounded-lg flex justify-center items-center'>
                <AtomImage src='/images/Globe.svg' width={28} height={28} />
              </div>
              <div className='flex flex-col gap-2 items-start justify-center'>
                <AtomText children={props.ips} size={14} weight='500' />
                <AtomText children={props.ipsVal} size={14} weight='700' />
              </div>

            </div>
            {/* conflict icon --------------------------------------- */}
            <div className='flex flex-row flex-wrap gap-2 ' >
              <div className='w-10 h-10 bg-[#327794] rounded-lg flex justify-center items-center'>
                <AtomImage src='/images/Conflict.svg' width={28} height={28} />
              </div>
              <div className='flex flex-col gap-2 items-start justify-center'>
                <AtomText children={props.ports} size={14} weight='500' />
                <AtomText children={props.portsVal} size={14} weight='700' />
              </div>
            </div>

            {/* bug icon------------------------------------ */}
            <div className='flex flex-row flex-wrap gap-2  '>
              <div className='w-10 h-10 bg-[#327794]  flex items-center rounded-lg justify-center'>
                <AtomImage src='/images/Bug.svg' width={28} height={28} />
              </div>
              <div className='flex flex-col gap-2 items-start justify-center'>
                <AtomText children={props.vulns} size={14} weight='500' />
                <AtomText children={props.vulnsVal} size={14} weight='700' />
              </div>
            </div>
          </div>
        )
      default:
        break;
    }
  }


  return (
    <>
      {handlerElem(props.Element || '')}
    </>
  )
}

export default MlCards