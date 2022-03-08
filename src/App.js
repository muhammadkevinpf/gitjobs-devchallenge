import './App.css';
import { Header, Sidebar, Content, SideMenu, JobList } from './module';
import { Grid, Pagination, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#334680',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Sidebar children={<SideMenu />} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Content children={<JobList />} />
          </Grid>
        </Grid>
        <Box
          className="pagination"
        >
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            color="primary"
            siblingCount={0}
          />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
