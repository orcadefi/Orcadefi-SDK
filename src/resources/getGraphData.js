var axios = require('axios');

function getAaveLendGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/lend/aave',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function getAaveBorrowGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/borrow/aave',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function getCompoundBorrowGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/borrow/compound',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function getCompoundLendGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/lend/compound',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function getDydxBorrowGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/borrow/dydx',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function getDydxLendGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/lend/dydx',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function getFulcrumLendGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/lend/fulcrum',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function getFulcrumBorrowGraph(){
  var config = {
    method: 'get',
    url: 'http://orcadefi.com/api/v1/public/graoh/borrow/fulcrum',
  };

  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

