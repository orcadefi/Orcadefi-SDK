var axios = require('axios');

//Verifies if the token is valid and have access to the Orca DeFi data.
async function isLoggedIn(token){
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

