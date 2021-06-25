import React from "react";
import {Story} from '@storybook/react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';

export default {
    title: "Pages/Landingpage",
};

export const Landingpage: Story = (args) => {
    return (
            <>
                <Navbar/>
                <Hero text="Hello world"/>
            </>
    )
};
