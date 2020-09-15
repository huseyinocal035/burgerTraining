import React from 'react';
import Auxh from '../../../hoc/Auxh'

const orderSummary = (props) => {
    const ingredientSummary = props.ingredients && Object.keys( props.ingredients )
        .map( igKey => {
            return(
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        })

    return (
        <Auxh>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxh>
    )

}

export default orderSummary;