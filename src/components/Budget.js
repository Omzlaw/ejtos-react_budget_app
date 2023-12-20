import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The value cannot exceed £ 20,000");
            return;
        }
        else if (event.target.value < budget) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>

            <div className="input-group">
                <span className="input-group-text">{currency}</span>
                <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
        </div>
    );
};
export default Budget;