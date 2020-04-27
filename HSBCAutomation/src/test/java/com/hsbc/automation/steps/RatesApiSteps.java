package com.hsbc.automation.steps;

import com.hsbc.automation.services.RatesApiService;
import com.hsbc.automation.beans.RatesDomain;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


public class RatesApiSteps {

    public String api;
    public int statusCode;
    public RatesDomain response;

    @Given("^Rates API '(.*)' for Latest Foreign Exchange rates$")
    public void loadDataToStandardObject(String api) {
        this.api = api;

    }

    @When("^I get data forex service status using above rest service$")
    public void getStatus() {
        RatesApiService ratesApiService = new RatesApiService();
        statusCode = ratesApiService.getStatusCode(this.api);
    }

    @When("^I get data forex service status using above rest service for date \"([^\"]*)\"$")
    public void getStatusForSpecificDate(String date)  {
        RatesApiService ratesApiService = new RatesApiService();
        statusCode = ratesApiService.getStatusCode(this.api, date);
    }

    @Then("^Status code of forex service should be '(.*)'$")
    public void statusCodeOfForexServiceShouldBe(String expectedStatus) {
        Assert.assertEquals("Status code is not matching !! ",
                Integer.parseInt(expectedStatus), this.statusCode);
    }

    @When("^I get forex data using above rest service$")
    public void getForexData() {
        RatesApiService ratesApiService = new RatesApiService();
        response = ratesApiService.getForexData(this.api);
    }


    @When("^I get forex data using above rest service for date \"([^\"]*)\"$")
    public void getForexDataForSpecificDate(String date){
        RatesApiService ratesApiService = new RatesApiService();
        response = ratesApiService.getForexData(this.api, date);
    }

    @Then("^verify the response data$")
    public void verifyResponseData() {
        System.out.println("Response data is " + response);
        Assert.assertTrue("Base currency is not Euro ", response.getBase().equals("EUR"));
        Assert.assertTrue("Current Date is not matching ", response.getDate().equals(getCurrentDate()));

        Assert.assertTrue("Forex rate for AUD is less than zeros " ,response.getRates().getAUD()>0);
        Assert.assertTrue("Forex rate for CAD is less than zeros " ,response.getRates().getCAD()>0);
        Assert.assertTrue("Forex rate for INR is less than zeros " ,response.getRates().getINR()>0);
    }

    @Then("^verify the response data along with specified date \"([^\"]*)\"$")
    public void verifyResponseDataForSpecifiedDate(String date) {
        System.out.println("Response data is " + response);
        Assert.assertTrue("Base currency is not Euro ", response.getBase().equals("EUR"));
        Assert.assertTrue("Current Date is not matching ", response.getDate().equals(date));

        Assert.assertTrue("Forex rate for AUD is less than zeros " ,response.getRates().getAUD()>0);
        Assert.assertTrue("Forex rate for CAD is less than zeros " ,response.getRates().getCAD()>0);
        Assert.assertTrue("Forex rate for INR is less than zeros " ,response.getRates().getINR()>0);
    }

    @Then("^verify the response data along with specified future date \"([^\"]*)\"$")
    public void verifyResponseDataForFutureDate(String date)  {
        verifyResponseData();
    }


    private String getCurrentDate() {

        Date date = new Date();
        String modifiedDate = new SimpleDateFormat("yyyy-MM-dd").format(yesterday());
        System.out.println("Formatted current date is " + modifiedDate);
        return modifiedDate;
    }

    private Date yesterday() {
        final Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -1);
        return cal.getTime();
    }
}
