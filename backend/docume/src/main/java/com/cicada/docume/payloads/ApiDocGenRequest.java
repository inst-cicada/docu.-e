package com.cicada.docume.payloads;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class ApiDocGenRequest {

    @JsonProperty(value = "curl", required = true)
    private String curl;

    @JsonProperty(value = "apiName", required = true)
    private String apiName;

    @JsonProperty(value = "successResponse", required = true)
    private String successResponse;

    @JsonProperty(value = "apiDescription", required = false)
    private String apiDescription;

    @JsonProperty(value = "additionalNotes", required = false)
    private String additionalNotes;

    @JsonProperty(value = "errorResponse", required = false)
    private String errorResponse;

    @JsonProperty(value = "usage", required = false)
    private String usage;

    @JsonProperty(value = "placeHolderLogoBase64", required = false)
    private String placeHolderLogoBase64;

}
