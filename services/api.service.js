import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
}

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

export { getWeather, getIcon };