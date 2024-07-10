// map.jsx
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/pin';

function Map({ items }) {
  return (
    <MapContainer center={[45.767338848584565, 4.834343996354081]} zoom={13} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item => (
        <Pin item={item} key={item.id}/>
      ))}
    </MapContainer>
  );
}

export default Map;
