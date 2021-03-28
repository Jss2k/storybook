import { Story, Meta } from '@storybook/react/types-6-0'

import Grid from './Grid'
import SectorsGrid from './../SectorsGrid/Sectorsgrid'
import Box from './../Box/Box'

export default {
  title: 'Grid',
  component: Grid,
} as Meta

export const TestGrid: Story = (args) => 
<div style={{position: 'relative', height: '100vh'}} {...args}>
<SectorsGrid spacing='md'></SectorsGrid>
<Grid container spacing='sm'>
  <Grid item xs={1}>
    <Box>Box 1</Box>
  </Grid>

  <Grid item xs={1}>
    <Box>Box 2</Box>
  </Grid>

  <Grid item xs={1}>
    <Box>Box 3</Box>
  </Grid>

  <Grid item xs={1}>
    <Box>Box 4</Box>
  </Grid>
</Grid>
</div>