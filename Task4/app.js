const utils = require('./Utilss');

const now = new Date();
const formated = utils.date(now);

const random = utils.random(2,10);

utils.logger(`Formated Date -> ${formated},\nRandom Number -> ${random}`);


