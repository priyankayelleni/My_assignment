$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ratesapitest.feature");
formatter.feature({
  "line": 1,
  "name": "Rates Api Services feature",
  "description": "",
  "id": "rates-api-services-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Valid rates api is returning 200 status code",
  "description": "",
  "id": "rates-api-services-feature;verify-valid-rates-api-is-returning-200-status-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Rates API \u0027https://api.ratesapi.io/api/latest\u0027 for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I get data forex service status using above rest service",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Status code of forex service should be \u0027200\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/latest",
      "offset": 11
    }
  ],
  "location": "RatesApiSteps.loadDataToStandardObject(String)"
});
formatter.result({
  "duration": 193028796,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.getStatus()"
});
formatter.result({
  "duration": 2017882908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "RatesApiSteps.statusCodeOfForexServiceShouldBe(String)"
});
formatter.result({
  "duration": 3475298,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify response of the forex api",
  "description": "",
  "id": "rates-api-services-feature;verify-response-of-the-forex-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Rates API \u0027https://api.ratesapi.io/api/latest\u0027 for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I get forex data using above rest service",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "verify the response data",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api/latest",
      "offset": 11
    }
  ],
  "location": "RatesApiSteps.loadDataToStandardObject(String)"
});
formatter.result({
  "duration": 403937,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.getForexData()"
});
formatter.result({
  "duration": 1105963640,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.verifyResponseData()"
});
formatter.result({
  "duration": 1195888,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Invalid rates api is returning 400 status code",
  "description": "",
  "id": "rates-api-services-feature;verify-invalid-rates-api-is-returning-400-status-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Rates API \u0027https://api.ratesapi.io/api\u0027 for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I get data forex service status using above rest service",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Status code of forex service should be \u0027400\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api",
      "offset": 11
    }
  ],
  "location": "RatesApiSteps.loadDataToStandardObject(String)"
});
formatter.result({
  "duration": 214120,
  "status": "passed"
});
formatter.match({
  "location": "RatesApiSteps.getStatus()"
});
formatter.result({
  "duration": 893110125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 40
    }
  ],
  "location": "RatesApiSteps.statusCodeOfForexServiceShouldBe(String)"
});
formatter.result({
  "duration": 42556,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Valid rates api is returning 200 status code with specific date",
  "description": "",
  "id": "rates-api-services-feature;verify-valid-rates-api-is-returning-200-status-code-with-specific-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Rates API \u0027https://api.ratesapi.io/api\u0027 for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I get data forex service status using above rest service for date \"2020-04-20\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Status code of forex service should be \u0027200\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api",
      "offset": 11
    }
  ],
  "location": "RatesApiSteps.loadDataToStandardObject(String)"
});
formatter.result({
  "duration": 79625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-04-20",
      "offset": 67
    }
  ],
  "location": "RatesApiSteps.getStatusForSpecificDate(String)"
});
formatter.result({
  "duration": 815635098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "RatesApiSteps.statusCodeOfForexServiceShouldBe(String)"
});
formatter.result({
  "duration": 50293,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify response of the forex api for specified date",
  "description": "",
  "id": "rates-api-services-feature;verify-response-of-the-forex-api-for-specified-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Rates API \u0027https://api.ratesapi.io/api\u0027 for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I get forex data using above rest service for date \"2020-04-20\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "verify the response data along with specified date \"2020-04-20\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api",
      "offset": 11
    }
  ],
  "location": "RatesApiSteps.loadDataToStandardObject(String)"
});
formatter.result({
  "duration": 96112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-04-20",
      "offset": 52
    }
  ],
  "location": "RatesApiSteps.getForexDataForSpecificDate(String)"
});
formatter.result({
  "duration": 827400505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-04-20",
      "offset": 52
    }
  ],
  "location": "RatesApiSteps.verifyResponseDataForSpecifiedDate(String)"
});
formatter.result({
  "duration": 217952,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify response of the forex api for future date",
  "description": "",
  "id": "rates-api-services-feature;verify-response-of-the-forex-api-for-future-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Rates API \u0027https://api.ratesapi.io/api\u0027 for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I get forex data using above rest service for date \"2020-05-20\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "verify the response data along with specified future date \"2020-05-20\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.ratesapi.io/api",
      "offset": 11
    }
  ],
  "location": "RatesApiSteps.loadDataToStandardObject(String)"
});
formatter.result({
  "duration": 55967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-05-20",
      "offset": 52
    }
  ],
  "location": "RatesApiSteps.getForexDataForSpecificDate(String)"
});
formatter.result({
  "duration": 849947513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-05-20",
      "offset": 59
    }
  ],
  "location": "RatesApiSteps.verifyResponseDataForFutureDate(String)"
});
formatter.result({
  "duration": 621979,
  "status": "passed"
});
});