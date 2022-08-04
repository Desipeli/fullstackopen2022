
const DisplayCountry = ( {country} ) => {

    return (
        <>
        <h1>{country.name.common}</h1>
        <BasicInfo country={country}/>
        <p><b>languages:</b></p>
        <Languages country={country}/>
        <Flag country={country}/>
        </>
    )
}

const BasicInfo = ({country}) => {

    return (
        <div>
            capital {country.capital} <br/>
            area {country.area}
        </div>
    )
}

const Languages = ({country}) => {
    const langs = []
    
    for (const key in country.languages) {
        langs.push(country.languages[key])
    }

    return (
        <ul>
            {langs.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
    )
}

const Flag = ({country}) => {
    
    return (
        <div>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        </div>
    )
}


export default DisplayCountry