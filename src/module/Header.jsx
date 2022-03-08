import React from 'react';
import { Typography, Paper } from '@mui/material';
import Input from '../components/Input';
import { CasesOutlined } from '@mui/icons-material';

function Header() {
  return (
    <div>
      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: '0.5em', fontFamily: 'Poppins' }}
        className="color-blue"
      >
        <strong>Github</strong> Jobs
      </Typography>
      <Paper elevation={3} component="form" className="image-header">
        <Input
          startIcon={<CasesOutlined color="disabled" fontSize="small" />}
          placeholder="Title, companies, expertise or benefits"
          search
        />
      </Paper>
    </div>
  );
}

export default Header;
