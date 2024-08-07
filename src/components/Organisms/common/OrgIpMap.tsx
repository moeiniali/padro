import React, { useMemo, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { MapContainer, TileLayer, useMap } from 'react-leaflet'


type OrgIpMapProps = {
 lat: number; // Latitude coordinate for the map center
 lng: number;// Longitude coordinate for the map center
};

const OrgIpMap: React.FC<OrgIpMapProps> = ({ lat, lng }) => {




 return (
  <>
   <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

   </MapContainer>

  </>
 );
};

export default OrgIpMap;
