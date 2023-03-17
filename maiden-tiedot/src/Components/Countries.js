
const Countries = ({ countries }) => {
    if (countries.length >= 10) {
        return (
            <div>Too many matches, please be more specific.</div>
        )
    }

    if (countries.length === 1) {
        return (
            <div>
                <h1>{countries[0]["name"]["common"]}</h1>
                <table>
                    <tbody>
                        <tr><td>Capital: {countries[0]["capital"]}</td></tr>
                        <tr><td>Area: {countries[0]["area"]}</td></tr>
                    </tbody>
                </table>
                <h2>Languages:</h2>
                {Object.values(countries[0]["languages"]).map(language => {
                    return (<li key={language}>{language}</li>)
                })}
                <img style={{ paddingTop: '50px' }} src={countries[0]['flags']['png']} alt='flag' />
            </div>
        )
    }

    return (
        <div>
            {countries.map((country, i) => {
                return <div key={i}>{country["name"]["common"]}</div>
            })}
        </div>
    )
}

export default Countries