import React from 'react'

function InvestForm({onSubmit, onChange, sharesToBuy}) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="sharesToBuy">Shares to buy:</label>
                <input 
                    type="number" min="1" step="1"
                    id="sharesToBuy" 
                    name="sharesToBuy" 
                    value={sharesToBuy}
                    onChange={onChange}>
                </input>

                <input type="submit" value="Buy" />
            </form>
        </div>
    )
}

export default InvestForm;