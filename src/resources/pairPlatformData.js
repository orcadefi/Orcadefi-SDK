var axios = require('axios');

function lendPairAave(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/aave/lend/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairAave(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/aave/borrow/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
function lendPairCompound(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/compound/lend/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairCompound(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/compound/borrow/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
function lendPairDydx(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/dydx/lend/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairDydx(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/dydx/borrow/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
function lendPairFulcrum(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/fulcrum/lend/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}

function borrowPairFulcrum(pair,token){
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/fulcrum/borrow/?pair='+ pair +'&token=' + token
    };
    axios(config).then(function (response) {console.log(JSON.stringify(response.data));}).catch(function (error) {console.log(error);});
}
