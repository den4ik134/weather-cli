#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token not given!');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token was saved!');
    } catch (error) {
        printError(error.message);
    }
};

const getForcast = async () => {
    try {
        const weather = await getWeather('dnipro');
        console.log(weather);
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Wrong city name.');
        } else if (e?.response?.status === 401) {
            printError('Wrong token.');
        } else {
            printError(e.message);
        }
    }
    
};

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getForcast();
};

initCLI();
