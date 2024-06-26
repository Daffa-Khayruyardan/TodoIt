// import packages
import React, {useState,useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
    // set fetch data
    const [data,setData] = useState('');

    // config axios
    const configAxios = {
        headers: {
            'Authorization': `Bearer ${document.cookie.split('=')[1]}`
        }
    }

    // fetch api
    useEffect(() => {
        axios.get(url, configAxios)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    // data null return nothing
    if (data === null) return

    // return value
    return {data}
}

export default useFetch;
