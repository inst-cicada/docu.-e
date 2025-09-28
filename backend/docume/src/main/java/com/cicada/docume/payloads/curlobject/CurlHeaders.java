package com.cicada.docume.payloads.curlobject;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CurlHeaders {

    @JsonProperty("name")
    private String name;

    @JsonProperty("value")
    private String value;
}
