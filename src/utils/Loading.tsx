import React from 'react'
import { Spin } from 'antd';


type Props = {}

const Loading = (props: Props) => {
 const [auto, setAuto] = React.useState(false);
 const [percent, setPercent] = React.useState(-50);
 const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

 React.useEffect(() => {
  timerRef.current = setTimeout(() => {
   setPercent((v) => {
    const nextPercent = v + 5;
    return nextPercent > 150 ? -50 : nextPercent;
   });
  }, 100);
  return () => clearTimeout(timerRef.current);
 }, [percent]);

 const mergedPercent = auto ? 'auto' : percent;

 return (
  <>


   <Spin percent={mergedPercent} size="large" spinning fullscreen />


  </>
 )
}

export default Loading;