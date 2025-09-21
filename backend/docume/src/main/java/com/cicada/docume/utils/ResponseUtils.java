package com.cicada.docume.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.cicada.docume.payloads.Response;

@Component
public class ResponseUtils {
    public static final Logger logger = LoggerFactory.getLogger(ResponseUtils.class);

    public ResponseEntity<Response> buildResponseEntityForSuccess(String data){
        Response response = new Response();
        response.setResponseData(data);
        response.setStatusCode("0");
        response.setStatusMessage("Success");
        response.setErrorCode("");
        logger.info("Final success API response is :: {}", response);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    public ResponseEntity<Response> buildResponseEntityForFailure(String errorCode, String errorMessage){
        Response response = new Response();
        response.setResponseData("data");
        response.setStatusCode("1");
        response.setStatusMessage(errorMessage);
        response.setErrorCode(errorCode);
        logger.info("Final failure API response is :: {}", response);
        return new ResponseEntity<>(response,HttpStatus.BAD_REQUEST);
    }
}
