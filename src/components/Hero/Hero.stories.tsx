import React from "react";
import {Story} from '@storybook/react';
import Hero from './Hero';

export default {
    title: "Components/Hero",
};

export const primary: Story = (args) => {
    return (
            <Hero text="Hello world"/>
    )
};
