var axios = require('axios');

function lendPairAave(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/aave/lend/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairAave(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/aave/borrow/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function lendPairAavePublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/aave/lend/?pair=' + pair
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairAavePublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/aave/borrow/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function lendPairCompound(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/compound/lend/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairCompound(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/compound/borrow/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function lendPairCompoundPublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/compound/lend/?pair=' + pair
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairCompoundPublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/compound/borrow/?pair=' + pair
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function lendPairDydx(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/dydx/lend/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairDydx(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/dydx/borrow/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function lendPairDydxPublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/dydx/lend/?pair=' + pair
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairDydPublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/dydx/borrow/?pair=' + pair
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function lendPairFulcrum(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/fulcrum/lend/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairFulcrum(pair, token) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/realtime/fulcrum/borrow/?pair=' + pair + '&token=' + token
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function lendPairFulcrumPublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/fulcrum/lend/?pair=' + pair
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

function borrowPairFulcrumPublic(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/fulcrum/borrow/?pair=' + pair
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}
