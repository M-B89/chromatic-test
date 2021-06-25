import React from "react";
import {Story} from '@storybook/react';
import Navbar from './Navbar';

export default {
    title: "Components/Navbar",
};

export const primary: Story = (args) => {
    return (
            <Navbar/>
    )
};
