import React , {useContext, createContext, useState} from 'react'

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) =>{
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`, {
            method : "GET",
            headers : {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '1abd2730a8mshc2c967f17cb073fp17eb43jsnc71fa63050c4'
              }
        })

        const data = await response.json();
        setResults(data); 
        setIsLoading(false);  


    }
    return (
        <ResultContext.Provider value={ {getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )

}
export const useResultContext = () => useContext(ResultContext);
