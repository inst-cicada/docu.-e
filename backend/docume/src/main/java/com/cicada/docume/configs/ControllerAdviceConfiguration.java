package com.cicada.docume.configs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cicada.docume.payloads.Response;

@ControllerAdvice
public class ControllerAdviceConfiguration {
    public static final Logger logger = LoggerFactory.getLogger(ControllerAdviceConfiguration.class);

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Response> handleGenericException(Exception ex) {
        logger.error("Inside generic exception handler of Advice Controller with exception :: {}", ex.getMessage());
        Response response = new Response();
        response.setErrorCode("GEN-ERR-99");
        response.setStatusCode("1");
        response.setStatusMessage("Error occured:: " + ex.getMessage());
        response.setResponseData("");
        logger.info("Returning final response as :: {}", response);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
