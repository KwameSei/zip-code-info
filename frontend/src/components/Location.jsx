import React from 'react'

const Location = ({ location }) => {
  
  return (
    <div>
      {
        location && (
          <div>
            <p>Country: {location.country}</p>
            <p>State: {location.state}</p>
            <p>Place Name: {location.placeName}</p>
            <p>Longitude: {location.longitude}</p>
            <p>Latitude: {location.latitude}</p>
          </div>
        )
      }
    </div>
  )
}

export default Location;