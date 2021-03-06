// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup9524/providers/Microsoft.Storage/storageAccounts/testacc7061?api-version=2017-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/947327e8-604b-409f-b6fb-e82bc29e6e96?monitor=true&api-version=2017-06-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'db1b5692-948f-40da-b4df-031957707eea',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'db1b5692-948f-40da-b4df-031957707eea',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T065205Z:db1b5692-948f-40da-b4df-031957707eea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 06:52:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup9524/providers/Microsoft.Storage/storageAccounts/testacc7061?api-version=2017-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/947327e8-604b-409f-b6fb-e82bc29e6e96?monitor=true&api-version=2017-06-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'db1b5692-948f-40da-b4df-031957707eea',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'db1b5692-948f-40da-b4df-031957707eea',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T065205Z:db1b5692-948f-40da-b4df-031957707eea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 06:52:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/947327e8-604b-409f-b6fb-e82bc29e6e96?monitor=true&api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodetestgroup9524/providers/Microsoft.Storage/storageAccounts/testacc7061\",\"kind\":\"BlobStorage\",\"location\":\"westus\",\"name\":\"testacc7061\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-06-09T06:52:05.0937794Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc7061.blob.core.windows.net/\",\"table\":\"https://testacc7061.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '643',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '983ab55c-a781-4d38-920f-7a45ed535183',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '983ab55c-a781-4d38-920f-7a45ed535183',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T065237Z:983ab55c-a781-4d38-920f-7a45ed535183',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 06:52:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/947327e8-604b-409f-b6fb-e82bc29e6e96?monitor=true&api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodetestgroup9524/providers/Microsoft.Storage/storageAccounts/testacc7061\",\"kind\":\"BlobStorage\",\"location\":\"westus\",\"name\":\"testacc7061\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-06-09T06:52:05.0937794Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc7061.blob.core.windows.net/\",\"table\":\"https://testacc7061.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '643',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '983ab55c-a781-4d38-920f-7a45ed535183',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '983ab55c-a781-4d38-920f-7a45ed535183',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T065237Z:983ab55c-a781-4d38-920f-7a45ed535183',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 06:52:36 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['testacc7061'];};