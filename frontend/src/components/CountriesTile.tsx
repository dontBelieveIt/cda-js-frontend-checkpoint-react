import "./CountriesTile.scss"

interface CountryTiles {
    name : string; 
    emoji: string;
}
export default function CountriesTile({name, emoji}: CountryTiles) {
    return(
        <div className="cards">
            <div className="emoji">
                <p>{emoji}</p>
            </div>
            <div className="name">
                <p>{name}</p>
            </div>
        </div>
    )
}