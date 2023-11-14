import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Form, Location, Loader } from './index';
import { toast } from 'react-toastify';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = async (code) => {
    setIsLoading(true);

    try {
      const response = await axios.get(`https://api.zippopotam.us/in/${code}`)
      console.log('Response is: ', response)

      const responseData = response.data;
      console.log('Response Data is: ', responseData)

      if (responseData.places.length === 0) {
        toast.error('Invalid Zip Code');
        throw new Error('Invalid Zip Code');
      }

      if (responseData.places.length > 1) {
        toast.warn('Multiple locations found. Displaying the first one.');
      }

      if (responseData.places.length === 1) {
        toast.success('Location found');
      }

      if (responseData.places.length === 0) {
        toast.error('Location not found');
      }

      setLocation({
        country: responseData.country,
        state: responseData.places[0]['state abbreviation'],
        placeName: responseData.places[0]['place name'],
        longitude: responseData.places[0].longitude,
        latitude: responseData.places[0].latitude
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <div>
      <Form submitForm={getLocation} />
      <Location location={location} />
      {isLoading && <Loader />}
    </div>
  )
}

export default Home;