import React, {Component} from "react";
import Auxh from "../../hoc/Auxh";
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    render() {
        return(
            <Auxh>
                <Burger/>
                <div>Build Controls</div>
            </Auxh>
        )
    }
}

export default BurgerBuilder