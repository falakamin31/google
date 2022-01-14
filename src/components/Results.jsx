import React , {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    return (
        <div>
            Results
        </div>
    )
}

export default Results
