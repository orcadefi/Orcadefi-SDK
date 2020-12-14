var axios = require('axios');

//Retrieves all realtime price of all pairs in Orca DeFi.
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
//Retrieves all public price of all pairs in Orca DeFi.
async function getPricePairsPublic(token) {
    var config = {
        method: 'post',
        url: 'http://orcadefi.com/api/v1/public/price'
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
