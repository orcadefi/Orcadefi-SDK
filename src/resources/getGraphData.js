var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/public/all',
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
