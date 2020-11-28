var axios = require('axios');

async function getAllData(token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/all?token=' + token,
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function getAllDataPublic(token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/all'
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
