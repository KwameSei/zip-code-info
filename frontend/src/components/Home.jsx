import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

      setLocation(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>This is a Home component</div>
  )
}

export default Home;