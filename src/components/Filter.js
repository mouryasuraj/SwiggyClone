

const Filter = ({topRatedRes, id, testId, filterName, handleEvent}) => {


    return (
        <div data-testid = {testId} className="top-rated">
            <input type="checkbox" id={id} checked={topRatedRes} onChange={handleEvent} />
            <label htmlFor={id}>{filterName}</label>
        </div>
    )
}

export default Filter
