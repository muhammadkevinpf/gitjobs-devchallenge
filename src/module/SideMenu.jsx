import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';
import { Public } from '@mui/icons-material';
import Input from '../components/Input';

function SideMenu() {
  const [fullTime, setFullTime] = useState(false);
  const handleChange = () => setFullTime(!fullTime);
  return (
    <div>
      <FormControlLabel
        label="Full time"
        control={<Checkbox checked={fullTime} onChange={handleChange} />}
      />

      <Typography
        variant="subtitle2"
        component="p"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Poppins',
          color: '#B9BDCF;',
          mb: '10px',
          mt: '10px'
        }}
      >
        LOCATION
      </Typography>
      <Input
        startIcon={<Public />}
        placeholder="City, state, zip code or country"
        size="small"
        fullWidth
      />
    </div>
  );
}

export default SideMenu;
