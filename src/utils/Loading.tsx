import React, { useEffect } from 'react'
import { Spin } from 'antd';

// Define the type for props
type Props = {}
// Define the Loading component
const Loading = (props: Props) => {
 const [auto, setAuto] = React.useState(false);
 const [percent, setPercent] = React.useState(-50);
 const timerRef = React.useRef<ReturnType<typeof setTimeout>>();



 // Effect to handle the progress animation
 useEffect(() => {
  timerRef.current = setTimeout(() => {
   setPercent((v) => {
    const nextPercent = v + 5;
    return nextPercent > 150 ? -50 : nextPercent;
   });
  }, 100);
  return () => clearTimeout(timerRef.current);
 }, [percent]);
// Determine the merged percentage value based on the auto state
 const mergedPercent = auto ? 'auto' : percent;

 return (
  <>


   <Spin percent={mergedPercent} size="large" spinning fullscreen />


  </>
 )
}

export default Loading;