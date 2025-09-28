package com.cicada.docume.payloads.curlobject;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CurlObject {

    @JsonProperty("url")
    private String url;

    @JsonProperty("methodType")
    private String methodType;

    @JsonProperty("urlParameters")
    private  List<UrlParameters> urlParameters;

    @JsonProperty("proxyUri")
    private String proxyUri;

    @JsonProperty("headers")
    private List<CurlHeaders> headers;

    @JsonProperty("requestString")
    private String requestString;

    //Now comes the parts for generating documents
    @JsonProperty("successResponseString")
    private String successResponseString;

    @JsonProperty("errorResponseString")
    private String errorResponseString;

    @JsonProperty("apiName")
    private String apiName;

    @JsonProperty("apiDesc")
    private String apiDesc;

    @JsonProperty("additionalNotes")
    private String additionalNotes;

    @JsonProperty("ussage")
    private String ussage;

    @JsonProperty("logoData")
    private String logoData;

}
