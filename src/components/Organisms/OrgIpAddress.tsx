import React, { useEffect, useMemo, useState } from 'react';
import AtomText from '../Atoms/AtomText';
import { Input, Row } from 'antd';
import type { GetProps } from 'antd';
import { fetchIpAddress } from '../../redux/slices/ipSlice';
import { MlCards, Loading } from '../ExAllCo';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ResponseTypes } from '../../redux/types';
import { notifyError } from '../../utils/notify';




type SearchProps = GetProps<typeof Input.Search>;

const OrgIpAddress = () => {
  const dispatch = useAppDispatch()
  const { data: ipData, loading, error } = useAppSelector((state) => state.Ip);

  const [savedData, setSavedData] = useState<ResponseTypes[]>([]);

  const { Search } = Input;

  const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
  const ipv6Regex = /^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;





  useEffect(() => {
    if (ipData) {
      setSavedData((prevData) => [...prevData, ipData]);
    }
  }, [ipData])


  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    if (info?.source && value) {
      if (ipv4Regex.test(value) || ipv6Regex.test(value)) {
        console.log(value);

        dispatch(fetchIpAddress(value))
      } else {
        notifyError('فرمت ip وارد شده صجیج نمیباشد')
      }
    }

  }


  function getIpType(ip: string): 'IPv4' | 'IPv6' | '' {
    if (ipv4Regex.test(ip)) {
      return 'IPv4';
    } else if (ipv6Regex.test(ip)) {
      return 'IPv6';
    } else {
      return '';
    }
  }



  return (
    <>
      {loading && (<Loading />)}
      <div className='w-full max-w-[900px] h-full flex flex-col m-auto gap-6 p-5 text-center bg-white rounded-lg shadow '>
        <div className='flex gap-6 flex-col justify-center items-center  '>
          <AtomText Element="p" children="آی پی مد نظر خود را پیدا کنید" size={20} weight='500' color='#313235' />
          <AtomText Element="p" className='whitespace-pre-wrap'
            children="اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید با استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا کنید. چه باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید، سپس روی  دریافت جزئیات IP کلیک کنید."
            size={16} weight='400' lineHeight='24px' color='#7E838F' />

        </div>

        <Row className='w-8/12 m-auto' >
          <Search placeholder="جستجو" size='large' onSearch={onSearch} enterButton />
        </Row>
        {savedData?.map((item, index) => (
          <MlCards key={index} Element='Ip'
            IpAddressVal={item.ip}
            ipvVal={getIpType(item.ip)}
            CountryVal={item.location.country}
            RegionVal={item.location?.region}
            CityVal={item.location?.city}
            LatitudeVal={item.location?.lat}
            LongitudeVal={item.location?.lng}

            lat={Number(item?.location?.lat)}
            lng={Number(item?.location?.lng)}

          />
        ))}

      </div>
    </>

  );







}

export default OrgIpAddress