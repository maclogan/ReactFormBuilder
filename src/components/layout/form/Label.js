import React from 'react'

export const Label = ({fieldState}) => {
    return (
        <div>
            <label>{fieldState.caption}</label>
        </div>
    )
}

export default Label