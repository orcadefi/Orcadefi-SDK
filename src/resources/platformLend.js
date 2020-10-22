var axios = require('axios');

async function getLendPlatform(platform,token){
    var aave = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/aave/lend?token=' + token
    };
    var compound = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/compound/lend?token=' + token
    };
    var dydx = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/dydx/lend?token=' + token
    };
    var fulcrum = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/fulcrum/lend?token=' + token
    };
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

async function getLendPlatformPublic(platform,token){
    var aave = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/aave/lend'
    };
    var compound = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/compound/lend'
    };
    var dydx = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/dydx/lend'
    };
    var fulcrum = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/fulcrum/lend'
    };
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



