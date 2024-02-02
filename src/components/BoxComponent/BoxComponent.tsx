import CellComponent from '../CellComponent/CellComponent';

import './BoxComponent.css';

export type BoxProps = {
    values: number[][]
}

const Box: React.FC<BoxProps> = ({ values }) => {

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

export default Box;