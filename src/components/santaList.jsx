import React, { Component } from 'react';
import { getSectretSantaList } from './../api'
import SantaItem from './santaItem'
import { ListContainer } from './../styles'
import './../styles/animations.scss'
export class SantaList extends Component {
    state = {
        list : []
    }
    componentWillMount(){
        getSectretSantaList().then(data=>{
            console.log(data)
            this.setState({list: data})
        })
    }
    selectedItem(id){
        getSectretSantaList(id).then(data=>{
            console.log(data)
        })        
    }
    render() {
        return (
            <div className="animation">
                <ListContainer>
                    {this.state.list.map(item => <SantaItem key={item.id}info={item} handleClick={this.selectedItem}/>)}
                </ListContainer>
            </div>
        );
    }
}
