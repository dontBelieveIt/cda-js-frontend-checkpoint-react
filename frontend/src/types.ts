export type Continent = {
    id: number; 
    name: string; 
}

export type Countries = {
    id: number;
    code: string; 
    continent: Continent;
    emoji: string; 
    name: string; 
}

export type AddCountry = {
    id: number; 
    code: string;
    name: string; 
    emoji: string; 
    continent: Continent;
}