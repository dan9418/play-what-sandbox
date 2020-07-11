import * as React from "react";
import "./ControllerHeader.css";

const ControllerHeader = (props) => {

    const [open, setOpen] = React.useState(false)

    return (
        <div className={`controller-header ${open ? 'open' : ''}`}>
            <h1>
                <span className='title'>{props.title}</span>
                <span className='edit' onClick={() => setOpen(!open)}>Edit</span>
            </h1>
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
};

export default ControllerHeader;