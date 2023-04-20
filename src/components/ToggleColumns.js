import React from 'react'

export const ToggleColumns = ({onCheckboxClick, columns, ...props}) => {
    const onCheckboxChange = (e) => {
        const {checked, name} = e.target;
        onCheckboxClick(name, checked)
    }

    return (
        <div className="toggle-columns">
            {
                Object.keys(columns).map((column, index) => {
                    return (
                        <div key={index}>
                            <input
                                onChange={onCheckboxChange}
                                id={column}
                                name={column}
                                defaultChecked={columns[column]}
                                type="checkbox"/>
                            <label htmlFor={column}>
                                {column}
                            </label>
                        </div>)
                })
            }
        </div>
    );
}
