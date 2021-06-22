import React from 'react';
import Box from './components/Box/Box';
import Grid from './components/Grid/Grid';
import GridRuler from './components/GridRuler/GridRuler';

function App() {
    return (
            <div className="App" style={{position: "relative"}}>
                <GridRuler spacing="md"> </GridRuler>
                <Grid container spacing="md" justifyContent="center" alignItems="flex-end">
                    <Grid item xs={2} sm={6} md={4} lg={3}>
                        <Box>Box 1</Box>
                    </Grid>
                    <Grid item xs={2} sm={6} md={4} lg={3}>
                        <Box>Box 2</Box>
                    </Grid>
                    <Grid item xs={2} sm={6} md={4} lg={3}>
                        <Box>Box 3</Box>
                    </Grid>
                    <Grid item xs={2} sm={6} md={4} lg={3}>
                        <Box>Box 3</Box>
                    </Grid>
                </Grid>
            </div>
    );
}

export default App;
