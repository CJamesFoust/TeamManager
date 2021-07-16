import React from 'react';
import './Popup.css';

const Popup = (props) => {
    var { content } = props;

    return (
        <div className="popupBox" >
            <div className="box">
                { content }
            </div>
        </div>
    );
};

export default Popup;