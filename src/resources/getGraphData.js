var axios = require('axios');

function getAaveLendGraph(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/lend/aave/pair?=' + pair,
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function getWeekLendGraph(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/week/lend/pair?=' + pair,
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function getMonthLendGraph(pair) {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/month/lend/pair?=' + pair,
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function getAllLendGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/all/lend',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getAaveBorrowGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/borrow/aave',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getCompoundBorrowGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/borrow/compound',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getCompoundLendGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/lend/compound',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getDydxBorrowGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/borrow/dydx',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getDydxLendGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/lend/dydx',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getFulcrumLendGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/lend/fulcrum',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getFulcrumBorrowGraph() {
    var config = {
        method: 'get',
        url: 'http://orcadefi.com/api/v1/public/graph/borrow/fulcrum',
    };

    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

