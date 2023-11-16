import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

import './styles.scss';

const Form = ({ submitForm }) => {
  const [code, setCode] = useState(''); // Setting the initial value of the code to an empty string

  const handleSubmit = (event) => { // Handling the submit event
    event.preventDefault();
    submitForm(code);
  };
  
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>  {/* Adding an onSubmit event handler to the form */}
        <input
          type='text'
          id='code'
          name='code'
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className='input'
          placeholder='Enter Postal Code. e.g. 600001'
        />
        <Button type='submit' className='button'> {/* Adding a button to submit the form */}
          <Search />
        </Button>
      </form>
    </div>
  )
}

export default Form;