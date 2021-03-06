import React from 'react';

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Buttons/Buttons'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return(
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
                    )
    })
    return (
    <Aux>
        <h3>Your Order</h3>
        <p> Your burger has following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout...</p>
        <Button btntype='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
        <Button btntype='Success' clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
    )
};

export default orderSummary;