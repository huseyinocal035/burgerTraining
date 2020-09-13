import React from "react";
import Auxh from '../../hoc/Auxh'
import classes from './Layout.css'

const layout = (props) => (
    <Auxh>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className= {classes.Content}>
            {props.children}
        </main>
    </Auxh>
)

export default layout