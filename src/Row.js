import React, { useEffect, useState } from 'react';
import axios from './axios';
const Row = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            console.log(request);
            return request
        }
        fetchData()
    }, [])

    return (
        <div>
            <h2>{title}</h2>
            
            {/* container -> posters */} 

        </div>
    );
};

export default Row;