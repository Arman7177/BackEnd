const PORT = 3000;
const database = 'http://mongodb/url';
const isProduction = true;

function getEnvironmentInfo() {
    return {
        PORT,
        database,
        isProduction,
    };
}

module.exports = {
    PORT,
    database,
    isProduction,
    getEnvironmentInfo
};
