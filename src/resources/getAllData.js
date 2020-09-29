var axios = require('axios');
var token = ""
var config = {
  method: 'get',
  url: 'http://orcadefi.comapi/v1/realtime/all',
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
