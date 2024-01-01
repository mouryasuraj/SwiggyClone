

const Filter = ({topRatedRes, id, filterName, handleEvent}) => {

     


    return (
        <div className="top-rated">
            <input type="checkbox" id={id} checked={topRatedRes} onChange={handleEvent} />
            <label htmlFor={id}>{filterName}</label>
        </div>
    )
}

export default Filter
