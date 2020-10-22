var axios = require('axios');

async function getPricePairs(token) {
    var config = {
        method: 'post',
        url: 'http://orcadefi.com/api/v1/realtime/price?token=' + token
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function getPricePairsPublic(token) {
    var config = {
        method: 'post',
        url: 'http://orcadefi.com/api/v1/realtime/price'
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
