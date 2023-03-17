
const Countries = ({ countries, showFunction, weather }) => {
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
                <h1>Weather info</h1>
                <p>Temperature: {weather['temp_c']}{'\xB0C'}</p>
                {(weather.length !== 0) ? <img src={weather['condition']['icon']} alt='weather_icon' /> : null}
                <p>Wind speed: {(weather['wind_kph'] / 3.6).toPrecision(2)}m/s</p>
            </div>
        )
    }

    return (
        <div>
            {countries.map((country, i) => {
                return (
                    <div key={i}>
                        {country["name"]["common"]}
                        <button onClick={() => showFunction(country["name"]["common"].toLowerCase())}>Show</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Countries