import './CellComponent.css';

type CellProps = {
    value: number,
    valueChanged: Function,
    row: number,
    column: number
}

const Cell: React.FC<CellProps> = ({ value, valueChanged, row, column }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        valueChanged(row, column, parseInt(event.target.value));
    }

    return(
        <input 
            value={ value === 0 ? "" : value }
            onChange={handleChange}
        />
    );
}

export default Cell;