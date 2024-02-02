import './CellComponent.css';

type CellProps = {
    value: number
}

const Cell: React.FC<CellProps> = ({ value }) => {

    return(
        <input 
            value={ value }
        />
    );
}

export default Cell;