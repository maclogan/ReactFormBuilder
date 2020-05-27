import React, {useState} from 'react'

export const Input = ({fieldState}) => {

    return (
        <div className="field label">
            <label>{fieldState.caption}</label>
            <input type={fieldState.inputType} />
        </div>
    )
}

export default Input