import React from 'react';
import { AtomText, OrgIpMap } from '../ExAllCo';
import { Card, Col, Collapse } from 'antd';
import type { CollapseProps } from 'antd';

const { Panel } = Collapse;

type MyComponentProps = {
  IpAddressVal?: string;
  CountryVal?: string;
  RegionVal?: string;
  CityVal?: string;
  LatitudeVal?: string;
  LongitudeVal?: string;

  lat?: number;
  lng?: number;

  value?: string;
  titleI?: string | undefined;
  titleII?: string | undefined;
  Link?: string | undefined;
  Element?: string | null;
  href?: string;
  onClick?: () => void;
  ipvVal?: any;
};

const MlCards: React.FC<MyComponentProps> = ({ value, Element, href, onClick, ipvVal,
  IpAddressVal, CountryVal, RegionVal, CityVal, LatitudeVal, LongitudeVal, lat, lng
}) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      showArrow: false,

      children: (
        <div className='w-full h-44 flex flex-row bg-[#F6F7F9] justify-between items-center'>
          <Col dir='ltr' className='max-w-4/12 max-h-44  p-2 text-right overflow-hidden'>
            <OrgIpMap lat={lat || 0} lng={lng || 0} />
          </Col>
          <Col dir='ltr' className='w-auto h-full  text-left p-2 flex flex-col flex-wrap gap-4'>
            <AtomText Element="ip" color='#7E838F' size="14px" weight='400' children="Ip Address" value={`${IpAddressVal}:${ipvVal}`} />
            <AtomText Element="ip" color='#7E838F' size="14px" weight='400' children="Country" value={CountryVal} />
            <AtomText Element="ip" color='#7E838F' size="14px" weight='400' children=" Region" value={RegionVal} />
            <AtomText Element="ip" color='#7E838F' size="14px" weight='400' children="City" value={CityVal} />
            <AtomText Element="ip" color='#7E838F' size="14px" weight='400' children="Latitude" value={LatitudeVal} />
            <AtomText Element="ip" color='#7E838F' size="14px" weight='400' children="Longitude" value={LongitudeVal} />
          </Col>
        </div>
      )
    }
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const handlerElem = (element: string) => {
    switch (element) {
      case 'Ip':
        return <Collapse ghost items={items} style={{ height: 'auto', padding: '12px 0 12px 0', backgroundColor: '#F6F7F9' }} accordion defaultActiveKey={['1']} onChange={onChange} />;
      default:
        return null;
    }
  };

  return (
    <>
      {handlerElem(Element || '')}
    </>
  );
};

export default MlCards;
