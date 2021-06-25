import React from "react";
import {Story} from '@storybook/react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/button';
import LoginForm from '../components/LoginForm/LoginForm';

export default {
    title: "Pages/Landing Page",
};

export const LandingPage: Story = (args) => {
    return (
            <>
                <Navbar/>
                <Hero text="Hello world"
                      children={[<Button>Login In</Button>, <Button outlined={true}>Sign In</Button>]}/>
                <LoginForm/>
            </>
    )
};
