var axios = require('axios');

//Retrieve Lend data from platform selected in realtime.
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
//Retrieve Lend data from platform selected in public.
async function getLendPlatformPublic(platform,token){
    var aave = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/aave/lend'
    };
    var compound = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/compound/lend'
    };
    var dydx = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/dydx/lend'
    };
    var fulcrum = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/fulcrum/lend'
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



