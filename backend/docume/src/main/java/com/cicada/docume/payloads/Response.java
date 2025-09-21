package com.cicada.docume.payloads;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Response {

    @JsonProperty("statusCode")
    public String statusCode;

    @JsonProperty("statusMessage")
    public String statusMessage;

    @JsonProperty("errorCode")
    public String errorCode;

    @JsonProperty("data")
    public String responseData;

}
