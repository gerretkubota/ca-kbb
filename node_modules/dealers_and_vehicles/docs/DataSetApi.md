# DealersAndVehicles.DataSetApi

All URIs are relative to *http://api.coxauto-interview.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataSetGetCheat**](DataSetApi.md#dataSetGetCheat) | **GET** /api/{datasetId}/cheat | Get correct answer for dataset (cheat)
[**dataSetGetDataSetId**](DataSetApi.md#dataSetGetDataSetId) | **GET** /api/datasetId | Creates new dataset and returns its ID
[**dataSetPostAnswer**](DataSetApi.md#dataSetPostAnswer) | **POST** /api/{datasetId}/answer | Submit answer for dataset


<a name="dataSetGetCheat"></a>
# **dataSetGetCheat**
> Answer dataSetGetCheat(datasetId)

Get correct answer for dataset (cheat)

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

var datasetId = "datasetId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataSetGetCheat(datasetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 

### Return type

[**Answer**](Answer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="dataSetGetDataSetId"></a>
# **dataSetGetDataSetId**
> DatasetIdResponse dataSetGetDataSetId()

Creates new dataset and returns its ID

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataSetGetDataSetId(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DatasetIdResponse**](DatasetIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="dataSetPostAnswer"></a>
# **dataSetPostAnswer**
> AnswerResponse dataSetPostAnswer(datasetId, answer)

Submit answer for dataset

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

var datasetId = "datasetId_example"; // String | 

var answer = new DealersAndVehicles.Answer(); // Answer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataSetPostAnswer(datasetId, answer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 
 **answer** | [**Answer**](Answer.md)|  | 

### Return type

[**AnswerResponse**](AnswerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

