import React from "react";
import {Story} from '@storybook/react';
import Button from './button';

export default {
    title: "Components/Button",
};

export const primary: Story = (args) => {
    return (
            <Button outlined={false} {...args}><span>Hello world</span></Button>
    )
};
