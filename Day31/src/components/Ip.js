import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Ip = () => {
    const [infoIp, setInfoIp] = useState({ ip: "", country: "", cc: "" });
    const [loading, setLoading] = useState(true);

    const fetchIp = async () => {
        try {
            const res = await fetch("https://api.my-ip.io/ip.json");
            const ip = await res.json();
            const resInfo = await fetch(`https://ipapi.co/${ip.ip}/json/`);
            const infoIp = await resInfo.json();
            setInfoIp(infoIp);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    const toLower = (str) => {
        return str.toLowerCase();
    }

    useEffect(() => {
        fetchIp();
    }, [])

    return (
        <div className="grid" >
            {loading === true ? < Loader /> :
                <>
                    <div className="name">
                        <h2>My IP</h2>
                        <span>{infoIp?.ip}</span>
                    </div>
                    <div className="country">
                        <h2>Country</h2>
                        <span>{infoIp?.country_name}</span>
                    </div>
                    <div className="code">
                        <h2>Code</h2>
                        <span>{infoIp?.country_code}</span>
                    </div>
                    <div className="country">
                        <img src={`https://lipis.github.io/flag-icon-css/flags/4x3/${toLower(infoIp?.country_code)}.svg`} alt="flag" />
                    </div>
                </>
            }
        </div>
    )
}

export default Ip
