import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Form, Location, Loader } from './index';
import { toast } from 'react-toastify';
import Logo from '../assets/Logo-transparent.png';

import './styles.scss';

const Home = () => {
  const [locations, setLocations] = useState(null); // Set the initial value of the location to null
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = import.meta.env.VITE_API_URL;

  const getLocation = async (code) => { // function to fetch the location
    setIsLoading(true);

    try {
      const response = await axios.get(`${URL}/${code}`)  // Making a GET request to the API

      const responseData = response.data; // Extracting the data from the response object

      if (responseData.places.length === 0) {
        toast.error('Invalid Zip Code');
        throw new Error('Invalid Zip Code');
      }

      toast.success('Location(s) found');

      // setLocation({
      //   country: responseData.country,
      //   state: responseData.places[0]['state abbreviation'],
      //   placeName: responseData.places[0]['place name'],
      //   longitude: responseData.places[0].longitude,
      //   latitude: responseData.places[0].latitude
      // });

      setLocations(responseData.places.map(place => ({  // Setting the location to the data from the response object
        country: responseData.country,
        state: place['state abbreviation'], // Using bracket notation to access the state abbreviation
        placeName: place['place name'], // Using bracket notation to access the place name
        longitude: place.longitude,
        latitude: place.latitude
      })));

      setError(null); // Clear the error
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
        toast.error('Postal code not found');
      } else {
        toast.error('Error fetching location information');
      }
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  // Function to clear the data
  const handleDataDelete = () => {
    setLocations([]);
  };

  return (
    <div className='home'>
      <img src={Logo} alt='logo' className='logo' />
      <Form submitForm={getLocation} />
      {/* <Location location={location} clearData={handleDataDelete} error={error}/> */}
      {locations && locations.map((location, index) => (
        <Location key={index} location={location} clearData={handleDataDelete} error={error}/>
      ))}
      {isLoading && <Loader />}
    </div>
  )
}

export default Home;