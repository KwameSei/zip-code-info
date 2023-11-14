import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

import './styles.scss';

const Form = ({ submitForm }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(code);
  };
  
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          // autoFocus
          margin='dense'
          type='text'
          id='code'
          name='code'
          label='Postal Code'
          value={code}
          onChange={(event) => setCode(event.target.value)}
          inputProps={{ minLength: 6, maxLength: 6}}
          className='input'
          placeholder='Enter Postal Code'
        />
        <Button type='submit' className='button'>
          <Search />
        </Button>
      </form>
    </div>
  )
}

export default Form;