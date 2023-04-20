import React, {useState} from 'react'

export const FilterForm = ({
                               onPriceInputChange, priceFrom,
                               priceTo, ...props
                           }) => {

    const onPriceChange = (e) => {
        const {name, value} = e.target;
        onPriceInputChange(name, Number(value))
    }


// TODO: bind handlers and props
    return (<div>
            <label htmlFor="priceFrom">Price From:</label>
            <input
                onChange={onPriceChange}
                type="number"
                id="priceFrom"
                name="priceFrom"
                value={priceFrom}
                placeholder="Price from..."/>
            <label htmlFor="priceTo">Price To:</label>
            <input
                onChange={onPriceChange}
                type="number"
                id="priceTo"
                value={priceTo}
                name="priceTo"
                placeholder="Price to..."/>
        </div>
    )
}
