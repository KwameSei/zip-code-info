import React, { useEffect } from 'react'
import { DeleteForeverOutlined, House, LocationCity, LocationOn, Public } from '@mui/icons-material';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

const Location = ({ location, clearData, error }) => {

  // Using useEffect to display the error toast only when the error changes
  useEffect(() => {
    if (error) {
      toast.error(error.message ? error.message : 'Something went wrong');
    }
  }, [error]);

  // const handleErrors = (error) => {
  //   if (error) {
  //     toast.error(error.message
  //       ? error.message
  //       : 'Something went wrong'
  //     )
  //   }
  // }
  
  return (
    <div>
      {/* {error && <p className='error'>{error.message}</p>} */}
      {/* {handleErrors(error)} */}
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
            {/* <Button className='button' onClick={clearData}>Clear</Button> */}
            <DeleteForeverOutlined className='delete-icon' onClick={clearData} />
          </div>
        )
      }
    </div>
  )
}

export default Location;