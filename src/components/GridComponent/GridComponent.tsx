import CellComponent from '../CellComponent/CellComponent';

import './GridComponent.css';

type GridProps = {
    values: number[][]
}

const Grid: React.FC<GridProps> = ({ values }) => {

    return(
        <>
            {
                values.map(row => {
                    return(
                        <div>
                            {
                                row.map(value => {
                                    return(
                                        <CellComponent value={value}/>
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