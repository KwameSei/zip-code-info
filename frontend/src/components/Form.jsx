import React, { useState } from 'react';
import { Input } from '@mui/material';

const Form = ({ submitForm }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(code);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='code'>Zip Code: </label>
        <Input
          type='text'
          id='code'
          name='code'
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;