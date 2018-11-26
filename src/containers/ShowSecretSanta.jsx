import React, { Component } from 'react';
import { AppContainer } from './../styles'
import { getSectretSantaList } from './../api'
export class ShowSecretSanta extends Component {
    componentWillMount(){
        const { id } = this.props.match.params 
        if (!id)
            return
        getSectretSantaList(id).then(data=>{
            console.log(data)
        })
    }
    render() {
        return (
            <AppContainer>
                show
            </AppContainer>
        );
    }
}