require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    db: {

    },
    jwt: {
        expiresIn: '1h'
    },
};

module.exports = config;
