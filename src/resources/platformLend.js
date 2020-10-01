var axios = require('axios');
var token = '...';
var aave = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/aave/lend',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};
var compound = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/compound/lend',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};
var dydx = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/dydx/lend',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};
var fulcrum = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/fulcrum/lend',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};


function getLendPlatfrom(platform){
    var config;
    if (platform === 1) {
        config = aave;
    }if (platform === 2) {
        config = compound;
    }if (platform === 3) {
        config = dydx;
    }if (platform === 4) {
        config = fulcrum;
    }
    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}


