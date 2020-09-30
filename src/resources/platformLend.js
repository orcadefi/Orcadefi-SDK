var axios = require('axios');
var token = '...';
var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/aave/lend',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
