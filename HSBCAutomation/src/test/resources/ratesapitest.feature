Feature: Rates Api Services feature

  Scenario: Verify Valid rates api is returning 200 status code
    Given Rates API 'https://api.ratesapi.io/api/latest' for Latest Foreign Exchange rates
    When I get data forex service status using above rest service
    Then Status code of forex service should be '200'

  Scenario: Verify response of the forex api
    Given Rates API 'https://api.ratesapi.io/api/latest' for Latest Foreign Exchange rates
    When I get forex data using above rest service
    Then verify the response data

  Scenario: Verify Invalid rates api is returning 400 status code
    Given Rates API 'https://api.ratesapi.io/api' for Latest Foreign Exchange rates
    When I get data forex service status using above rest service
    Then Status code of forex service should be '400'

  Scenario: Verify Valid rates api is returning 200 status code with specific date
    Given Rates API 'https://api.ratesapi.io/api' for Latest Foreign Exchange rates
    When I get data forex service status using above rest service for date "2020-04-20"
    Then Status code of forex service should be '200'

  Scenario: Verify response of the forex api for specified date
    Given Rates API 'https://api.ratesapi.io/api' for Latest Foreign Exchange rates
    When I get forex data using above rest service for date "2020-04-20"
    Then verify the response data along with specified date "2020-04-20"

  Scenario: Verify response of the forex api for future date
    Given Rates API 'https://api.ratesapi.io/api' for Latest Foreign Exchange rates
    When I get forex data using above rest service for date "2020-05-20"
    Then verify the response data along with specified future date "2020-05-20"


