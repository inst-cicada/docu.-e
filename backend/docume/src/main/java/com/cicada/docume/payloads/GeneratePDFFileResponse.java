package com.cicada.docume.payloads;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GeneratePDFFileResponse {

    @JsonProperty("fileName")
    private String fileName;

    @JsonProperty("fileBase64")
    private String fileBase64;

}
