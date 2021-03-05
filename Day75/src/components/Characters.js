import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';

const Characters = () => {

    const [chars, setChars] = useState([]);
    const [query, setQuery] = useState("");


    const fecthChars = async () => {
        try {
            const { data } = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
            setChars(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fecthChars()
    }, [query])


    return (
        <div className="container">
            <div className="search">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Characters" />
            </div>

            <div className="items">

                {chars.map(char =>
                    <Card char={char} />
                )}

            </div>

        </div>
    )
}

export default Characters
