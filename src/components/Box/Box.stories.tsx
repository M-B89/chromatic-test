import React from 'react';
import {Meta, Story} from '@storybook/react';
import Box from '../Box/Box';

export default {
    title: 'Components/Box',
    component: Box,
} as Meta;

export const Basic: Story = () =>
        <div className="App" style={{position: "relative"}}>
            <Box>Box 1</Box>
        </div>;

