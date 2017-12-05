const dotenvConfig = require('dotenv').config();

module.exports = function (context, req) {
    context.log('Example dotenv-keyvault function');
    
    context.res = { 
        "value1" : process.env.MY_ENV_VALUE,
        "value2" : process.env.MY_SECRET_VALUE
    };

    context.done();
};