import React from 'react'
import { LoginForm } from './../components' 
import { AppContainer } from './../styles'
export const Login = props =>{
    return(
        <AppContainer login>
            <h1>Login</h1>
            <LoginForm/>
        </AppContainer>
    )
}