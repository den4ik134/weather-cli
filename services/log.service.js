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


export {printError, printSuccess, printHelp};