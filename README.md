# Orcadefi-SDK
![OrcaDeFI](https://github.com/orcadefi/orcadefi.github.io/blob/master/img/bg-orca.png)

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

Method: *POST*
```
http://orcadefi.com/api/v1/login
```
Generates a token for access to all routes that need authorization

Request parameters:

Parameter | Description |
----------| ----------- |
username | The username of your account of Orca DeFi platform |
password | Your password of your account of Orca DeFi platform |

Response data:

Response | Description |
-------- | ----------- |
token    | The key to request all data in the Orca DeFI API with expiration of 72 hours| 
refresh  | The key to refresh the session when the token expires |

**refreshToken**

Method: *POST*
```
http://orcadefi.com/api/v1/refresh
```
Generates a new token when the token expires in the 72 hours that is the duration.

JSON parameters:

Parameter | Description |
----------| ----------- |
refresh_token | The key to refresh the session when the token expires retrieved from login request |


Response data:

Response | Description |
-------- | ----------- |
token    | New key to request all data in the Orca DeFI API with expiration of 72 hours| 
refresh  | New key to refresh the session when the token expires |

**getAllData**

Method: *GET*
```
http://orcadefi.comapi/v1/realtime/all
```
Retrieves information from all pairs and platforms in real time by organizing information by platform

Header parameters:

Parameter | Description |
----------| ----------- |
Authorization | The key to request all data in the Orca DeFI API with expiration of 72 hours |

Response data:

Response | Description |
-------- | ----------- |
AaveBorrow | All pairs data from Borrow % APR of the Aave platform | 
AaveLend  | All pairs data from Lend % APR of the Aave platform |
CompoundBorrow | All pairs data from Borrow % APR of the Compound platform | 
CompoundLend  | All pairs data from Lend % APR of the Compound platform |
DydxBorrow | All pairs data from Borrow % APR of the Dydx platform | 
DydxLend  | All pairs data from Lend % APR of the Dydx platform |
FulcrumBorrow | All pairs data from Borrow % APR of the Fulcrum platform | 
FulcrumBorrowLend  | All pairs data from Lend % APR of the Fulcrum platform |

