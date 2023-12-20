import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }
    return (
        <div className='input-group'>
            <select value={newCurrency} className="custom-select form-select bg-success text-white" id="inputGroupSelect01" onChange={(event) => handleCurrencyChange(event)}>
                <option>Choose Currency</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default CurrencyDropdown;