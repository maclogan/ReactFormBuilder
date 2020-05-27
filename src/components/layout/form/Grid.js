import React, {useEffect} from 'react'
import Cell from './Cell'

export const Grid = ({col}) => {
    
    useEffect(()=>{
        const cells = document.querySelectorAll('.cell')
        const grids = document.querySelectorAll('.grid')
        console.log(cells)

        cells.forEach(cell=> {
            cell.addEventListener('dragstart', ()=> {
                cell.classList.add('dragging')
            })
            cell.addEventListener('dragend', ()=> {
                cell.classList.remove('dragging')
            })
        })

        grids.forEach(grid => {
            grid.addEventListener('dragover', (e) => {
                e.preventDefault()
                const dragCell = document.querySelector('.dragging')
                const afterElement = getDragAfterElement(grid, e.clientX, e.clientY)
                
                if (afterElement == null) {
                    grid.appendChild(dragCell)
                } else {
                    grid.insertBefore(dragCell, afterElement)
                }
            })
        })
    },[])

    const getDragAfterElement = (grid, x, y) => {
        const draggableElements = [...grid.querySelectorAll('.cell:not(.dragging')]

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offsetX = x - box.left - box.width / 2
            const offsetY = y -box.top -box.height / 2
            if (offsetX < 0 && offsetX > closest.offsetX && offsetY < 0 && offsetY > closest.offsetY) {
                return {offsetX: offsetX, offsetY: offsetY, element:child}
            } else {
                return closest
            }
        }, {offsetX: Number.NEGATIVE_INFINITY, offsetY: Number.NEGATIVE_INFINITY}).element
    }
    

    return (
        <div className={`grid`}>
            <Cell width="third" text="1" />
            <Cell width="half" text="2" />
            <Cell width="full" text="3" />
            <Cell width="half" text="4" />
        </div>
    )
}

export default Grid