import React from "react";
import Auxh from '../../hoc/Auxh'
const layout = (props) => (
    <Auxh>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxh>
)

export default layout