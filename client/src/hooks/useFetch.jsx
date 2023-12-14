import { useEffect, useState } from 'react';

const API_KEY = 'OgXG1HdDWaoUxhSuSlIJJybKBRurMLbW'


/**
 * Custom hook for fetching GIFs from the Giphy API based on a keyword.
 * @param {Object} options - The options for the hook.
 * @param {string} options.keyword - The keyword to search for GIFs.
 * @returns {string} The URL of the fetched GIF.
 */
const useFetch = ({ keyword }) => {
    const[gifUrl, setGifUrl] = useState('');

    /**
     * Fetches GIFs from the Giphy API based on a keyword.
     * @returns {Promise<void>} A Promise that resolves when the GIFs are fetched.
     */
    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(' ').join('')}&limit=1`)
            const { data } = await response.json();

            setGifUrl(data[0].images?.downsized_medium?.url)
        } catch (error) {
            setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284')
        }
    }

    useEffect(() => {
        if(keyword) fetchGifs();
    }, [keyword]);

    return gifUrl;
}

export default useFetch;