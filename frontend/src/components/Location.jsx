import { House, LocationCity, LocationOn, Public } from '@mui/icons-material';
import React from 'react'

const Location = ({ location }) => {
  
  return (
    <div>
      {
        location && (
          <div className='location'>
            <p className='location-text'>
              <Public className='icons' />
              Country: <p className='p-text'>{location.country}</p>
            </p>
            <p className='location-text'>
              <LocationCity className='icons' />
              State: <p className='p-text'>{location.state}</p>
            </p>
            <p className='location-text'>
              <House className='icons' />
              Place Name: <p className='p-text'>{location.placeName}</p>
            </p>
            <p className='location-text'>
              <LocationOn className='icons' />
              Longitude: <p className='p-text'>{location.longitude}</p>
            </p>
            <p className='location-text'>
              <LocationOn className='icons' />
              Latitude: <p className='p-text'>{location.latitude}</p>
            </p>
          </div>
        )
      }
    </div>
  )
}

export default Location;