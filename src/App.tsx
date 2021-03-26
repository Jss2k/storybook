import Box from './components/Box/Box'
import Grid from './components/Grid/Grid';
import SectorsGrid from './components/SectorsGrid/Sectorsgrid';

function App() {
  return (
    <div className="App" style={{ margin: '16px', position: 'relative', height: '100vh'}}>
      <SectorsGrid spacing='md'></SectorsGrid>
      <Grid container spacing='sm'>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
