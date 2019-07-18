# DealersAndVehicles.DealersApi

All URIs are relative to *http://api.coxauto-interview.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealersGetDealer**](DealersApi.md#dealersGetDealer) | **GET** /api/{datasetId}/dealers/{dealerid} | Get information about a dealer


<a name="dealersGetDealer"></a>
# **dealersGetDealer**
> DealersResponse dealersGetDealer(datasetId, dealerid)

Get information about a dealer

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DealersApi();

var datasetId = "datasetId_example"; // String | 

var dealerid = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dealersGetDealer(datasetId, dealerid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 
 **dealerid** | **Number**|  | 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

