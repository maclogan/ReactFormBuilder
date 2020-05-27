import React, {useState} from 'react'
import Cell from './form/Cell'

export const FormGrid = () => {

    const colClasses = {
        1: "full",
        2: "half",
        3: "third"
    }

    const [captionPostion, setCaptionPosition] = useState('top')

    const [cols, setCols] = useState(2)

    const [cellsArray, setCellsArray] = useState(Array(cols).fill({}))

console.log(cellsArray)

    const editCols = (increment) => {
        if (increment > 0 && cols < 3) {
            setCols(cols+increment)
            setCellsArray(Array(cols+increment).fill({}))
        }
        if (increment < 0 && cols > 1) {
            setCols(cols+increment)
            setCellsArray(Array(cols+increment).fill({}))
        }
    }

    const editCell = (index, newCellData) => {
        setCellsArray(cellsArray[index]=newCellData)
    }

    return (
        <div className="form-grid-container">
            <div>{cols} Columns
            {cols < 3 && <button onClick={()=>editCols(1)}>Add Column</button>}
            {cols > 1 && <button onClick={()=>editCols(-1)}>Remove Column</button>}
            </div>
            <div>
                <label>Caption Position: </label>
                <select id="captionPosition" value={captionPostion} onChange={(e)=>{setCaptionPosition(e.target.value)}}>
                    <option selected={true} value='top'>Top</option>
                    <option value='left'>Left</option>
                </select>
            </div>
            <div className={`form-grid ${colClasses[cols]}`}>
                {cellsArray.map((el,i) => {
                    return <Cell cellIndex={i} captionPostion={captionPostion}/>
                })}
            </div>
            <button className="fab" >+</button>
        </div>
    )
}

export default FormGrid