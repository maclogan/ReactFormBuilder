import React from 'react'

export const CellMenu = ({type, setType, fieldState, setField}) => {

    const {text} = fieldState
    
    const onChange = (e) => {
        setField({...fieldState, [e.target.name]: e.target.value})
    }

    return <div className = "cell-menu">
        <div className="cell-menu-group">
            <label>Type: </label>
            <select id="type" value={type} onChange={(e) => {setType(e.target.value)}}>
                <option value="empty">Empty</option>
                <option value="label">Label</option>
                <option value="input">Input</option>
            </select>
        </div>
        <div className="cell-menu-group">
            <label>Width: </label>
            <select name="fieldWidth" value={fieldState.fieldWidth} onChange={e=>onChange(e)}>              
                <option value="third">Third</option>
                <option value="half">Half</option>
                <option value="full">Full</option>
            </select>
        </div>
        {type!=='empty' && <div className="cell-menu-group">
            <label>Caption: </label>
            {(type==='input' || type==='label') && 
                <input type="text" name="caption" value={fieldState.caption} onChange={e => onChange(e) }/>}
        </div> }
        
    </div>
}

export default CellMenu