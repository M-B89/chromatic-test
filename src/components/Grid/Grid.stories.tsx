import React from 'react';
import {Meta, Story} from '@storybook/react';
import Grid from './Grid';
import GridRuler from '../GridRuler/GridRuler';
import Box from '../Box/Box';

export default {
    title: 'Components/Grid',
    component: Grid,
} as Meta;

export const Basic: Story = () =>
        <div className="App" style={{position: "relative"}}>
            <Grid container spacing="md">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 1</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 2</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 3</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 3</Box>
                </Grid>
            </Grid>
        </div>;


export const WithRuler: Story = () =>
        <div className="App" style={{position: "relative"}}>
            <GridRuler spacing="md"> </GridRuler>
            <Grid container spacing="md">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 1</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 2</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 3</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box>Box 3</Box>
                </Grid>
            </Grid>
        </div>;

export const Interactive: Story = (args) =>
        <div className="App" style={{position: "relative", height: '100vh'}}>
            <GridRuler spacing="md"> </GridRuler>
            <Grid container spacing="md" {...args}>
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
                    <Box>Box 3</Box>
                </Grid>
            </Grid>
        </div>;

