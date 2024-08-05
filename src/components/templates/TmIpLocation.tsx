import { Toaster } from 'react-hot-toast'
import { OrgIpAddress } from '../ExAllCo'
import { useAppSelector } from '../../redux/hooks'
import { Loading } from '../ExAllCo'


type Props = {}

const TmIpLocation = (props: Props) => {
 const loading = useAppSelector((state) => state.Ip.loading)
 return (
  <div className='w-full h-screen bg-white flex justify-center items-center'>
   <Toaster />
   {loading && (<Loading />)}

   <OrgIpAddress />
  </div>
 )
}

export default TmIpLocation