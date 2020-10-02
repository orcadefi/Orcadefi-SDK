var axios = require('axios');

function lendPairAave(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/aave/lend/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairAave(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/aave/borrow/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
function lendPairCompound(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/compound/lend/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairCompound(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/compound/borrow/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
function lendPairDydx(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/dydx/lend/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairDydx(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/dydx/borrow/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
function lendPairFulcrum(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/fulcrum/lend/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairFulcrum(token){
    var config = {
  method: 'get',
  url: 'http://orcadefi.com/api/v1/realtime/fulcrum/borrow/?pair=' + token,
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjAxNjk4MzA4LCJuYW1lIjoiT3JjYSBEZUZpIn0.wtbwCDxlxuhSK4VvcHk2dQYFgI27FNlfMoYPhMVYUpg'
  }
};
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
