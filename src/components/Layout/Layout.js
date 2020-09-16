import React from "react";
import Auxh from '../../hoc/Auxh'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Auxh>
        <Toolbar/>
        <main className= {classes.Content}>
            {props.children}
        </main>
    </Auxh>
)

export default layout