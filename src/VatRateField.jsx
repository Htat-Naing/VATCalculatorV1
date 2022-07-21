import React from 'react';

const VatRateField = (props) =>{
    return(
        <div>
            VAT Rates : 
            <select>
                <option value="20">20%</option>
                <option value="15">15%</option>
                <option value="12.5">12.5%</option>
                <option value="0">0%</option>
            </select>
        </div>
    );
}

export default VatRateField;
