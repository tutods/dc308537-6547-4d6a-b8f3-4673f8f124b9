import React, {useEffect, useState} from 'react'

import '../styles/Search.css';
import {ToggleColumns} from './ToggleColumns';
import {ProductList} from './ProductList';
import {FilterForm} from './FilterForm';

export const Search = ({products, ...props}) => {
    const [price, setPrice] = useState({priceFrom: '', priceTo: ''});
    const [columns, setColumns] = useState({
        id: true, name: true, department: true, price: true, currency: true,
    });
    const [filteredProducts, setFilteredProducts] = useState(products);

    const onPriceInputChange = (name, value) => {
        setPrice(prev => ({...prev, [name]: value}))
    }

    const onCheckboxClick = (name, checked) => {
        setColumns(prev => ({...prev, [name]: checked}))
    }

    const filterProducts = () => {
        if (price.priceFrom !== '') {
            setFilteredProducts(
                products.filter((product) => {
                    if (price.priceTo === '') {
                        return product.price >= price.priceFrom;
                    }

                    return product.price >= price.priceFrom && product.price <= price.priceTo;
                })
            );
        }
    }

    useEffect(() => {
        filterProducts()
    }, [price])

    return (<div className="Products">
        <FilterForm
            priceFrom={price.priceFrom}
            priceTo={price.priceTo}
            onPriceInputChange={onPriceInputChange}/>

        <ToggleColumns
            onCheckboxClick={onCheckboxClick}
            columns={columns}/>

        <ProductList
            products={filteredProducts}
            columns={columns}/>
    </div>);
}

export default Search;
