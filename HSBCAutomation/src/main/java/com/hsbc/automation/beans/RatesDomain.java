package com.hsbc.automation.beans;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class RatesDomain {

    @JsonProperty("base")
    private String base;
    @JsonProperty("rates")
    private Rates rates;
    @JsonProperty("date")
    private String date;

    @Override
    public String toString() {
        return "RatesDomain{" +
                "base='" + base + '\'' +
                ", rates=" + rates +
                ", date='" + date + '\'' +
                '}';
    }

    @Getter
    @Setter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Rates {
        @Override
        public String toString() {
            return "Rates{" +
                    "gBP=" + gBP +
                    ", hKD=" + hKD +
                    ", iDR=" + iDR +
                    ", iLS=" + iLS +
                    ", dKK=" + dKK +
                    ", iNR=" + iNR +
                    ", cHF=" + cHF +
                    ", mXN=" + mXN +
                    ", cZK=" + cZK +
                    ", sGD=" + sGD +
                    ", tHB=" + tHB +
                    ", hRK=" + hRK +
                    ", mYR=" + mYR +
                    ", nOK=" + nOK +
                    ", cNY=" + cNY +
                    ", bGN=" + bGN +
                    ", pHP=" + pHP +
                    ", sEK=" + sEK +
                    ", pLN=" + pLN +
                    ", zAR=" + zAR +
                    ", cAD=" + cAD +
                    ", iSK=" + iSK +
                    ", bRL=" + bRL +
                    ", rON=" + rON +
                    ", nZD=" + nZD +
                    ", tRY=" + tRY +
                    ", jPY=" + jPY +
                    ", rUB=" + rUB +
                    ", kRW=" + kRW +
                    ", uSD=" + uSD +
                    ", hUF=" + hUF +
                    ", aUD=" + aUD +
                    '}';
        }

        @JsonProperty("GBP")
        private Double gBP;
        @JsonProperty("HKD")
        private Double hKD;
        @JsonProperty("IDR")
        private Integer iDR;
        @JsonProperty("ILS")
        private Double iLS;
        @JsonProperty("DKK")
        private Double dKK;
        @JsonProperty("INR")
        private Double iNR;
        @JsonProperty("CHF")
        private Double cHF;
        @JsonProperty("MXN")
        private Double mXN;
        @JsonProperty("CZK")
        private Double cZK;
        @JsonProperty("SGD")
        private Double sGD;
        @JsonProperty("THB")
        private Double tHB;
        @JsonProperty("HRK")
        private Double hRK;
        @JsonProperty("MYR")
        private Double mYR;
        @JsonProperty("NOK")
        private Double nOK;
        @JsonProperty("CNY")
        private Double cNY;
        @JsonProperty("BGN")
        private Double bGN;
        @JsonProperty("PHP")
        private Double pHP;
        @JsonProperty("SEK")
        private Double sEK;
        @JsonProperty("PLN")
        private Double pLN;
        @JsonProperty("ZAR")
        private Double zAR;
        @JsonProperty("CAD")
        private Double cAD;
        @JsonProperty("ISK")
        private Double iSK;
        @JsonProperty("BRL")
        private Double bRL;
        @JsonProperty("RON")
        private Double rON;
        @JsonProperty("NZD")
        private Double nZD;
        @JsonProperty("TRY")
        private Double tRY;
        @JsonProperty("JPY")
        private Double jPY;
        @JsonProperty("RUB")
        private Double rUB;
        @JsonProperty("KRW")
        private Double kRW;
        @JsonProperty("USD")
        private Double uSD;
        @JsonProperty("HUF")
        private Double hUF;
        @JsonProperty("AUD")
        private Double aUD;
    }
}
