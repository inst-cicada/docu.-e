package com.cicada.docume.rest;

import org.springframework.web.bind.annotation.RestController;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class Rest {
    @GetMapping("/get")
    public ResponseEntity<String> getMethodName() {
        JSONObject json = new JSONObject();
        json.put("Node", "Value");
        return new ResponseEntity<>(json.toString(), HttpStatus.OK);
    }

}
