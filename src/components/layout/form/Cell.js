import React, {useState, useRef, useEffect} from 'react'
import Input from './Input'
import Empty from './Empty'
import CellMenu from './CellMenu'
import Label from './Label'

// export const Cell = ({width, text}) => {
//     return (
//         <div draggable="true" className={`cell ${width}`}>
//             {text}
//         </div>
//     )
// }
export const Cell = ({width, text}) => {
    const [type, setType] = useState("empty")
    const [show, setShow] = useState(false)
    const [fieldState, setFieldState] = useState({
        type: {type},
        caption: '',
        inputType: '',
        fieldWidth: "third"
    })
    const wrapperRef = useRef(null)

    useEffect(() => {
        document.addEventListener("click", handleClick, false)
        return () => {
            document.removeEventListener("click", handleClick, false)
        }
    }, [])

    const handleClick = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const renderCell = () => {
        switch(type) {
            case 'input':
                return <Input fieldState={fieldState} />
            case 'label':
                return <Label fieldState={fieldState} />
            default:
                return <Empty />
        }
    }
    return (
        <div draggable='true' className={`cell ${width}`} ref={wrapperRef}>
            {text}
            {renderCell()}
            {show && <CellMenu type={type} setType={setType} fieldState={fieldState} setField={setFieldState}/>}
        </div>
    )
}
export default Cell