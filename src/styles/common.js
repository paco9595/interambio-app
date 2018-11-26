import styled from 'styled-components'

export const AppContainer = styled.div`
    ${props=> props.login ? 'background-image: url(./assets/background-login.jpg)' : ''};
    height: 100vh;
    padding: 20px;
    background-color: #fefdff;
` 