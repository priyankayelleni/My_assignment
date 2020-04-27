package com.hsbc.automation.services;

import com.hsbc.automation.beans.RatesDomain;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;

public class RatesApiService {

    public int getStatusCode(String api) {
        return given().log().all().contentType(ContentType.JSON).when().
                get(api).then().log().
                all().extract().response().getStatusCode();
    }

    public RatesDomain getForexData(String api) {
        return given().log().all().contentType(ContentType.JSON).when().
                get(api).then().log().
                all().extract().
                response().jsonPath().getObject(".", RatesDomain.class);
    }

    public int getStatusCode(String api, String date) {
        return given().log().all().contentType(ContentType.JSON).when().
                get(api + "/" + date).then().log().
                all().extract().response().getStatusCode();
    }

    public RatesDomain getForexData(String api, String date) {
        return given().log().all().contentType(ContentType.JSON).when().
                get(api + "/" + date).then().log().
                all().extract().
                response().jsonPath().getObject(".", RatesDomain.class);
    }
}
