import React from 'react';
import { ItemContainer, ItemTitle} from './../styles'
const SantaItem = (props) => {
    const {title, mount, place,currency, revealDate} = props.info
    const handleClick = () =>{
        console.log(props.info.id)
        props.handleClick(props.info.id)
    }
    return (
        <ItemContainer onClick={handleClick}>
            <ItemTitle>{title}</ItemTitle>
            <p>lugar: { place}</p>
            <p>cantidad {`$${mount} ${currency}`}</p>
            <p>fecha de intercambio { revealDate }</p>
            
        </ItemContainer>
    );
}

export default SantaItem;
