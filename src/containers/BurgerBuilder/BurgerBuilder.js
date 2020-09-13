import React, {Component} from "react";
import Auxh from "../../hoc/Auxh";
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return(
            <Auxh>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Auxh>
        )
    }
}

export default BurgerBuilder