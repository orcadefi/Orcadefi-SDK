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

### **Get all data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/all
```
Retrieves information from all pairs and platforms in real time by organizing information by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

```
http://orcadefi.com/api/v1/public/all
```
Retrieves 15 minutes ago information from all pairs and platforms by organizing information by platform

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

### **Get Aave all data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/aave
```
Retrieves information from all pairs and platforms in real time by organizing information by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

```
http://orcadefi.com/api/v1/public/aave
```
Retrieves 15 minutes ago information from all pairs in Aave platform 

Response data:

Response | Description |
-------- | ----------- |
AaveBorrow | All pairs data from Borrow % APR of the Aave platform | 
AaveLend  | All pairs data from Lend % APR of the Aave platform |

### **Get Compound all data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/compound
```
Retrieves information from all pairs and platforms in real time by organizing information by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

```
http://orcadefi.com/api/v1/public/aave
```
Retrieves 15 minutes ago information from all pairs in Compound platform

Response data:

Response | Description |
-------- | ----------- |
CompoundBorrow | All pairs data from Borrow % APR of the Compound platform | 
CompoundLend  | All pairs data from Lend % APR of the Compound platform |

### **Get Dydx all data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/dydx
```
Retrieves information from all pairs and platforms in real time by organizing information by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

```
http://orcadefi.com/api/v1/public/dydx
```
Retrieves 15 minutes ago information from all pairs in Dydx platform

Response data:

Response | Description |
-------- | ----------- |
DydxBorrow | All pairs data from Borrow % APR of the Dydx platform | 
DydxLend  | All pairs data from Lend % APR of the Dydx platform |

### **Get Fulcrum all data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/fulcrum
```
Retrieves information from all pairs and platforms in real time by organizing information by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

```
http://orcadefi.com/api/v1/public/fulcrum
```
Retrieves 15 minutes ago information from all pairs in Fulcrum platform

Request data:

Response | Description |
-------- | ----------- |
FulcrumBorrow | All pairs data from Borrow % APR of the Fulcrum platform | 
FulcrumBorrowLend  | All pairs data from Lend % APR of the Fulcrum platform |

### **Get Aave pair data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/aave/lend/
http://orcadefi.com/api/v1/realtime/aave/borrow/
```
Retrieves information from one pair in real time by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

```
http://orcadefi.com/api/v1/public/aave/lend/
http://orcadefi.com/api/v1/public/aave/borrow/
```
Retrieves 15 minutes ago information from one pair by platform

Request parameters:

Parameter | Description |
----------| ----------- |
pair | The pair of the Aave platform |


Request data:

Response | Description |
-------- | ----------- |
Pair | Pair lend/borrow data of the Aave platform | 

### **Get Compound pair data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/compound/lend/
http://orcadefi.com/api/v1/realtime/compound/borrow/
```
Retrieves information from one pair in real time by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

Request parameters:

Parameter | Description |
----------| ----------- |
pair | The pair of the Compound platform |

```
http://orcadefi.com/api/v1/public/compound/lend/
http://orcadefi.com/api/v1/public/compound/borrow/
```
Retrieves 15 minutes ago information from one pair by platform

Response data:

Response | Description |
-------- | ----------- |
Pair | Pair lend/borrow data of the Compound platform | 

### **Get Dydx pair data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/dydx/lend/
http://orcadefi.com/api/v1/realtime/dydx/borrow/
```
Retrieves information from one pair in real time by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

Request parameters:

Parameter | Description |
----------| ----------- |
pair | The pair of the Dydx platform |

```
http://orcadefi.com/api/v1/public/dydx/lend/
http://orcadefi.com/api/v1/public/dydx/borrow/
```
Retrieves 15 minutes ago information from one pair by platform

Response data:

Response | Description |
-------- | ----------- |
Pair | Pair lend/borrow data of the Dydx platform | 

### **Get Fulcrum pair data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/fulcrum/lend/
http://orcadefi.com/api/v1/realtime/fulcrum/borrow/
```
Retrieves information from one pair in real time by platform

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

Request parameters:

Parameter | Description |
----------| ----------- |
pair | The pair of the Fulcrum platform |

```
http://orcadefi.com/api/v1/public/fulcrum/lend/
http://orcadefi.com/api/v1/public/fulcrum/borrow/
```
Retrieves 15 minutes ago information from one pair by platform

Response data:

Response | Description |
-------- | ----------- |
Pair | Pair lend/borrow data of the Fulcrum platform | 

### **Get Uniswap all pair price data**

Method: *GET*
```
http://orcadefi.com/api/v1/realtime/price
```
Retrieves price data from all pairs in Uniswap platform in real time by organizing information by pair.

Request parameters:

Parameter | Description |
----------| ----------- |
token | The key to request all data in the Orca DeFI API with expiration of 72 hours |

```
http://orcadefi.com/api/v1/public/price
```
Retrieves 15 minutes ago price data from all pairs in Uniswap platform by organizing information by pair.

Response data:

Response | Description |
-------- | ----------- |
PairPrices | All pairs data from Uniswap in ETH value | 

### **Errors**

Method: *GET*

Response errors:

message | Description |
-------- | ----------- |
Unauthorized | Invalid token or expired token | 
Not Found | Invalid route or malformed route | 
Method Not Allowed | Invalid http method or invalid request method | 
