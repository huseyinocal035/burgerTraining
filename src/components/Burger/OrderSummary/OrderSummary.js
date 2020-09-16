import React from 'react';
import Auxh from '../../../hoc/Auxh'
import Button from '../../UI/Button/Button'

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
            <p><strong>Total price: {props.price}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxh>
    )

}

export default orderSummary;