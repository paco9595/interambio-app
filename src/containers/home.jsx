import React from 'react'
import { SantaList } from './../components';
import { AppContainer } from "./../styles";
export const Home = () => {
    return (
        <AppContainer>
            <h1>Your secret santas</h1>
            <SantaList/>
        </AppContainer>
    )
}