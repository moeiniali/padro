import React, { useEffect, useMemo, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import AtomText from '../Atoms/AtomText';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Card, Row } from 'antd';
import type { GetProps } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchIpAddress } from '../../redux/slices/ipSlice';
import { AppDispatch } from '../../redux/store';
import { MlCards } from '../ExAllCo';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import IpSlices from '../../redux/slices/ipSlice';
import Item from 'antd/es/list/Item';
import { ResponseTypes } from '../../redux/types';




type SearchProps = GetProps<typeof Input.Search>;

const OrgIpAddress = () => {
 const dispatch = useAppDispatch()
 const ipData = useAppSelector((state) => state.Ip.data);
 const [savedData, setSavedData] = useState<ResponseTypes[]>([]);

 const { Search } = Input;



 useMemo(() => {
  if (ipData) {
   setSavedData((prevData) => [...prevData, ipData]);
  }
 }, [ipData]);



 const suffix = (
  <AudioOutlined
   style={{
    fontSize: 16,
    color: '#1677ff',
   }}
  />
 );
 const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
  console.log(info?.source, value);
  if (info?.source && value) {
   dispatch(fetchIpAddress(value))
  }
 }


 return (
  <div className='w-full max-w-[900px] h-auto flex flex-col m-auto gap-6 p-5 text-center bg-white rounded-lg shadow '>
   <div className='flex gap-6 flex-col justify-center items-center  '>
    <AtomText Element="p" children="آی پی مد نظر خود را پیدا کنید" size={20} weight='500' color='#313235' />
    <AtomText Element="p" className='whitespace-pre-wrap'
     children="اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید با استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا کنید. چه باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید، سپس روی  دریافت جزئیات IP کلیک کنید."
     size={16} weight='400' lineHeight='24px' color='#7E838F' />

   </div>

   <Row className='w-8/12 m-auto' >
    <Search placeholder="جستجو" size='large'  onSearch={onSearch} enterButton />
   </Row>
   {savedData?.map((item, index) => (
    <MlCards key={index} Element='Ip'
     IpAddressVal={item.ip}
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
 );







}

export default OrgIpAddress