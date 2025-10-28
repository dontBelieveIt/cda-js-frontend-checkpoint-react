import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
query GetAllCountries {
    countries {
        id
        name
        emoji
    }
}
`

export const GET_COUNTRY_INFO = gql`
 query Country($code: ID!) {
    country(code: $code) {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
 }
`

export const ADD_COUNTRY = gql`
 mutation addCountry($data: AddCountry!) {
   addCountry(data: $data) {
     id
     name
     code
     emoji
     continent {
       id
       name
     }
   }
  }
`