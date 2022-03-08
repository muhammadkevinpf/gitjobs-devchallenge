import React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import { Public, AccessTime } from '@mui/icons-material';
function JobList() {
  return (
    <Box>
      <Paper sx={{ marginTop: '16px', padding: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={3}>
            <Paper
              sx={{
                marginLeft: '10px',
                padding: '10px',
                textAlign: 'center',
              }}
              className="job-poster-name-container"
            >
              <Typography variant="subtitle2" component="p">
                Posted by <br /> Pearson
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={8} md={7} style={{ paddingBottom: '10px' }}>
            <Typography variant="subtitle2" component="p">
              Pearson
            </Typography>
            <Typography variant="subtitle1" component="p">
              Front-End Software Engineer
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                border: 1,
                borderRadius: '5px',
                padding: '2px',
                textAlign: 'center',
                width: '75px',
              }}
            >
              Full time
            </Typography>
            <Grid container sx={{ marginTop: '5px' }}>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="subtitle2"
                  component="p"
                  className="color-grey"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Public fontSize="small" /> London
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="subtitle2"
                  component="p"
                  className="color-grey"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AccessTime fontSize="small"/> 5 days ago
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default JobList;
