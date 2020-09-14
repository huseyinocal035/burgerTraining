import React, {Component} from "react";
import Auxh from "../../hoc/Auxh";
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return(
            <Auxh>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls/>
            </Auxh>
        )
    }
}

export default BurgerBuilder