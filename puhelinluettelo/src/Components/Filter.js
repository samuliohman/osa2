const Filter = ({ filter, update }) => {
    return (
        <form>
            <div>Filter shown with: <input value={filter} onChange={update} /></div>
        </form>
    )
}

export default Filter