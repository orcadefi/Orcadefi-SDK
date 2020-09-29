# Orcadefi-SDK
![OrcaDeFI](https://orcadefi.github.io/assets/images/bg-orca-61c0accc9bc1e442c046cf0707d3e7b9.png)

A simple Javascript SDK to use the orcadefi platform

## Installation
```
    git clone https://github.com/orcadefi/Orcadefi-SDK.git
```

## API

Orca DeFi uses an API for show the real-time data of APR oracles of lend/borrow data, using the on-chain data with maximum precision and immediately disposition


## Routes

All routes are use the /api/v1/

**login**
```
http://orcadefi.com/api/v1/login
```
Generates a token for access to all routes that need authorization

**refreshToken**
```
http://orcadefi.com/api/v1/refresh
```
Generates a new token when the token expires in the 72 hours that is the duration.

**getAllData**
```
http://orcadefi.comapi/v1/realtime/all
```
Retrieves information from all pairs and platforms in real time by organizing information by platform

