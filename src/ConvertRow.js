import React from 'react'

const ConvertRow = ({currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount}) => {
    return (
        <div className="main2">
            <input type="number" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((options,idx) => 
                    <option key={idx} value={options}>{options}</option>
                    )}
                
            </select>
        </div>
    )
}

export default ConvertRow
