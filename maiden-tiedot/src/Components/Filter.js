
const Filter = ({ filter, update }) => {
    return (
        <form>
            <div>Filter countries: <input value={filter} onChange={update} /></div>
        </form>
    )
}

export default Filter;