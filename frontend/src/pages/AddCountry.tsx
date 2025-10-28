import "../main.scss"
import BannerTitle from "../components/BannerTitle";

import { useQuery } from "@apollo/client";
import { ADD_COUNTRY } from "../graphql/queries"; 
import { Continent } from "../types";

interface AddedCountry {
    id: number; 
    code: string;
    name: string; 
    emoji: string; 
    continent: Continent;
}

export default function AddCountry() {
    const { loading, error, data } = useQuery<{country: AddedCountry}>(ADD_COUNTRY)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong...</p>
    return(
        <>
        <BannerTitle title="Add a country" />
        <div className="main-container">

        <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </form>
        </div>
        </>
    )
}