import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  
    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState('');
    // console.log(gif);

    async function fetchData() {
        setLoading(true);
        const {data} = await axios.get( tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url ;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    }, []);

    return {loading,gif,fetchData};

}

export default useGif;