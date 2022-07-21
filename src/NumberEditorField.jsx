import React from 'react';

const NumberEditorField = (props) =>{
    return(
        <input type="number" id="num" value={props.price}/>
    );
}

export default NumberEditorField;