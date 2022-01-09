import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async () => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    if (!token) {
        throw new Error('Not set API_KEY, set this with command -t [API_KEY]');
    };
    if (!city) {
        throw new Error('City not set, use command -s [CITY_NAME] for set this');
    };

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });

    return data;
};

export { getWeather };