import chalk from "chalk";
import dedent from "dedent-js";


const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent(`
        ${chalk.bgCyan(' HELP ')}
        Without parameters - output weather
        -s [CITY] for city install
        -h for output help
        -t [API_KEY] for token save
        `)
    );
};

const printWeather = async (res, icon) => {
    console.log(
        dedent(`
        ${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
        ${icon}  ${res.weather[0].description}
        Температура: ${res.main.temp} (ощущается как: ${res.main.feels_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}м/с
        `)
    );
};


export {printError, printSuccess, printHelp, printWeather};