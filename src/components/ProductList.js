import React from 'react'

export const ProductList = ({products, columns, ...props}) => {

    const visibleColumns = Object.entries(columns).filter(([key, value]) => !!value).map(([key]) => key)


    return (
        <div id="product-list">
            <header>
                <strong>Product List ({products.length} items)</strong>
            </header>
            <table>
                <thead>
                <tr>
                    {visibleColumns.map(column => (
                        <th>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        {visibleColumns.map(column => (
                            <td>{product[column]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
