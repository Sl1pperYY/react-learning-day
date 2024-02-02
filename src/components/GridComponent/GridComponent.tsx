import CellComponent from '../CellComponent/CellComponent';
import React, { useState } from 'react';
import './GridComponent.css';
import { EventBus } from '../../lowlevel/EventBus';

const Grid: React.FC = () => {
    const n = 9;
    const [grid, setGrid] = useState(Array.from({length: n},()=> Array.from({length: n}, () => 0)));
    const eventBus: EventBus = EventBus.getInstance();

    eventBus.register('solveButtonClicked', () => {
        let copy = [...grid];
        
        solve(copy);

        setGrid(copy);
    });

    eventBus.register('clearButtonClicked', () => {
        setGrid(Array.from({length: n},()=> Array.from({length: n}, () => 0)));
    })

    const solve = (copy: number[][]): boolean => {
        const emptyCell = findEmptyCell();
        const [row, col] = emptyCell;
        if (row !== -1) {
            for(let i = 1; i < 10; i++) {
                if(isAllowed(row, col, i)) {
                    copy[row][col] = i;
    
                    if(solve(copy)) {
                        return true
                    }

                    copy[row][col] = 0;
                }
            }
            return false;
        }
        return true;
    }

    const findEmptyCell = (): [number, number] => {
        for(let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (grid[i][j] === 0) {
                    return [i, j]
                }
            }
        }
        return [-1, -1];
    }

    const isAllowed = (rowIndex: number, colIndex: number, value: number) => {
        return isAllowedInCol(colIndex, value) && isAllowedInRow(rowIndex, value) && isAllowedInBox(rowIndex, colIndex, value)
    }

    const isAllowedInCol = (colIndex: number, value: number): boolean => {
        const results = grid.map(row => {
            if (row[colIndex] === value) {
                return false
            }
            return true;
        });
        if (results.includes(false)) {
            return false
        }
        return true
    }

    const isAllowedInRow = (rowIndex: number, value: number) => {
        return !grid[rowIndex].includes(value);
    }

    const isAllowedInBox = (rowIndex: number, colIndex: number, value: number) => {
        const boxRowStartIndex = rowIndex - rowIndex % 3;
        const boxColStartIndex = colIndex - colIndex % 3;
        for(let i = boxRowStartIndex; i < boxRowStartIndex + 3; i++) {
            for(let j = boxColStartIndex; j < boxColStartIndex + 3; j++) {
                if(grid[i][j] === value) {
                    return false
                }
            }
        }
        return true;
    }

    const valueChanged = (row: number, column: number, newValue: number) => {
        let copy = [...grid];
        copy[row][column] = newValue;
        setGrid(copy);
    }

    return(
        <>
            {
                grid.map((row, indexRow) => {
                    return(
                        <div key={`Row-${indexRow}`} className='row'>
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