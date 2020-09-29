var axios = require('axios');
var token = ""
var data = JSON.stringify({"refresh_token":token});

var config = {
  method: 'post',
  url: 'http://orcadefi.com/api/v1/refresh',
  headers: {
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
