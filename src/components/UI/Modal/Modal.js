import React from 'react';
import classes from './Modal.css'
import Auxh from '../../../hoc/Auxh'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Auxh>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' :  'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxh>

)

export default modal;