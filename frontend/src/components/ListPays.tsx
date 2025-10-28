import "../main.scss";

import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES } from "../graphql/queries";
import CountriesTile from "./CountriesTile";

type Country = {
    name: string;
    emoji: string;
    id: number;
};

type CountriesData = {
    countries: Country[]
}

export default function ListPays() {
    const { loading, error, data } = useQuery<CountriesData>(GET_ALL_COUNTRIES);

    if (loading) return <p>Loading...</p>
    if (error) {
        console.error(error)
        return <p>Oups, unfortunately we met an error while loading...</p>
    }

    return (
        <>
        <div className="main-container">
        <div className="tiles-container">
            {data?.countries.map((country) => {
                return (
                    <CountriesTile key={country.id} name={country.name} emoji={country.emoji} />
                )
            })}
        </div>
        </div>
        </>
    )
}