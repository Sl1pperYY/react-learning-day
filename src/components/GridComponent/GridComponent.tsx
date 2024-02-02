import CellComponent from '../CellComponent/CellComponent';
import React, { useState } from 'react';
import './GridComponent.css';


const Grid: React.FC = () => {
    const n = 9;
    const [grid, setGrid] = useState(Array.from({length: n},()=> Array.from({length: n}, () => 0)));

    const valueChanged = (row: number, column: number, newValue: number) => {
        let copy = [...grid];
        copy[row][column] = newValue;
        setGrid(copy);

        console.log(grid);
    }

    return(
        <>
            {
                grid.map((row, indexRow) => {
                    return(
                        <div key={`Row-${indexRow}`}>
                            {
                                row.map((value, indexCol) => {
                                    return(
                                        <CellComponent key={`Cell-${indexRow}-${indexCol}`} value={value} row={indexRow} column={indexCol} valueChanged={valueChanged}/>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    );
}

export default Grid;