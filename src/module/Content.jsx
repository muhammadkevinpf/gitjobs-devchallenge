import React from 'react';
import { Box } from '@mui/material';

function Content(props) {
  const { children } = props;
  return <Box>{children}</Box>;
}

export default Content;
