var axios = require('axios');

function getBorrowPlatform(token,platform){
    var aave = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/aave/borrow?token=' + token
    };
    var compound = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/compound/borrow?token=' + token
    };
    var dydx = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/dydx/borrow?token=' + token
    };
    var fulcrum = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/realtime/fulcrum/borrow?token=' + token
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
function getBorrowPlatformPublic(token,platform){
    var aave = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/aave/borrow'
    };
    var compound = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/compound/borrow'
    };
    var dydx = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/dydx/borrow'
    };
    var fulcrum = {
      method: 'get',
      url: 'http://orcadefi.com/api/v1/public/fulcrum/borrow'
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


