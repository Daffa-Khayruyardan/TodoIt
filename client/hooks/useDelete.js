import React from 'react';
import axios from 'axios';

const useDelete = (url) => {
    // config axios
    const configAxios = {
        headers: {
            'Authorization': `Bearer ${document.cookie.split('=')[1]}`
        }
    }

    // delete item
    axios.delete(`${url}`, configAxios);

    // reload pages after delete
    window.location.reload();
}

export default useDelete;
