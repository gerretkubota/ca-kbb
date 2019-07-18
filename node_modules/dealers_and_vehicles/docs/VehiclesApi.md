# DealersAndVehicles.VehiclesApi

All URIs are relative to *http://api.coxauto-interview.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vehiclesGetIds**](VehiclesApi.md#vehiclesGetIds) | **GET** /api/{datasetId}/vehicles | Get a list of all vehicleids in dataset
[**vehiclesGetVehicle**](VehiclesApi.md#vehiclesGetVehicle) | **GET** /api/{datasetId}/vehicles/{vehicleid} | Get information about a vehicle


<a name="vehiclesGetIds"></a>
# **vehiclesGetIds**
> VehicleIdsResponse vehiclesGetIds(datasetId)

Get a list of all vehicleids in dataset

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.VehiclesApi();

var datasetId = "datasetId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehiclesGetIds(datasetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 

### Return type

[**VehicleIdsResponse**](VehicleIdsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="vehiclesGetVehicle"></a>
# **vehiclesGetVehicle**
> VehicleResponse vehiclesGetVehicle(datasetId, vehicleid)

Get information about a vehicle

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.VehiclesApi();

var datasetId = "datasetId_example"; // String | 

var vehicleid = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vehiclesGetVehicle(datasetId, vehicleid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 
 **vehicleid** | **Number**|  | 

### Return type

[**VehicleResponse**](VehicleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

