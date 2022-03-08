import React, { Fragment } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';

function Input(props) {
  const { search, placeholder, startIcon, fullWidth, size } = props;
  const searchButton = (
    <Button
      variant="contained"
      size="large"
      sx={{ textTransform: 'none', padding: '0.5em 3em' }}
    >
      Search
    </Button>
  );

  return (
    <Fragment>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          endAdornment: search && searchButton,
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
        }}
        size={size}
        className="search-input"
        fullWidth={fullWidth}
      />
    </Fragment>
  );
}

export default Input;
