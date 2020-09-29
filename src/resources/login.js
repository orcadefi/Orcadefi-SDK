var axios = require('axios');

var username = ""
var password = ""

var config = {
  method: 'post',
  url: 'http://orcadefi.com/api/v1/login?username=' + username + '&password=' + password,
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
