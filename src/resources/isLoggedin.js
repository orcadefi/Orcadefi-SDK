var axios = require('axios');

async function isLoggedin(token){
    var config = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/is-loggedin?token=' + token
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

