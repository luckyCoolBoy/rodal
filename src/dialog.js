/**
 * Dialog Component
 */

import React from 'react';

let Dialog = props => {

    let className = `rodal-dialog rodal-${props.animation}-${props.animationType}`;
    let CloseButton = props.showCloseButton ? <span className="rodal-close" onClick={props.onClose} /> : null;
    let style = {
        width                   : props.width,
        height                  : props.height,
        marginTop               : - props.height / 2 - 20,
        marginLeft              : - props.width / 2,
        animationDuration       : props.duration + 'ms',
        WebkitAnimationDuration : props.duration + 'ms'
    };

    return (
        <div style={style} className={className}>
            {CloseButton}
            {props.children}
        </div>
    )
};

export default Dialog;
