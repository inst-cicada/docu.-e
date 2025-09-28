package com.cicada.docume.services;

import java.net.InetSocketAddress;
import java.util.LinkedHashMap;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ServerWebExchange;

import com.cicada.docume.payloads.CommonParamsResponseBody;
import com.cicada.docume.payloads.curlobject.CurlObject;
import com.google.gson.Gson;

@Service
public class RestServices {

    public static final Logger logger = LoggerFactory.getLogger(RestServices.class);

    public String getPreloadedInfo(ServerWebExchange request) {
        try {
            InetSocketAddress address = request.getRequest().getRemoteAddress();
            CommonParamsResponseBody responseBody = new CommonParamsResponseBody();
            responseBody
                    .setOrigin(address.getAddress() + ":" + address.getPort());
            return new Gson().toJson(responseBody);
        } catch (Exception e) {
            logger.error("Something went wrong while getting the network stats", e);
            return "0.0.0.0:0000";
        }
    }

    public static void main(String[] args) throws Exception {
        String curl = "curl -X 'POST' \\\r\n" + //
                "  'https://api.example.com/v1/users' \\\r\n" + //
                "  -H 'Content-Type: application/json' \\\r\n" + //
                "  -H 'Authorization: Bearer <token>' \\\r\n" + //
                "  -H 'X-Request-ID: 12345' \\\r\n" + //
                "  -d '{\r\n" + //
                "  \"name\": \"Abhishek\",\r\n" + //
                "  \"role\": \"admin\"\r\n" + //
                "}' \\\r\n" + //
                "  -x http://localhost:8080";
        parseCurlToObject(curl);
    }

    // curl -X 'POST' 'https://api.example.com/v1/users' -H 'Content-Type:,
    // application/json' -H 'Authorization: Bearer <token>' -H 'X-Request-ID:,
    // 12345' -d '{ "name": "Abhishek", "role": "admin" }' -x,
    // http://localhost:8080
    private static void parseCurlToObject(String curl) throws Exception {
        CurlObject mainObject = new CurlObject();
        String cleanedCurlString = curl.replaceAll("\\s*\\\\\\s*\n\\s*", " ").replaceAll("\\s+", " ").trim();
        System.out.println(cleanedCurlString);
        mainObject.setMethodType(parseMethodTypeFromString(cleanedCurlString));
        mainObject.setUrl(parseUrlFromString(cleanedCurlString));
    }

    private static String parseUrlFromString(String curlItems) throws Exception {
        int uriStartIndex = curlItems.indexOf("http");
        int uriEndIndex = uriStartIndex + curlItems.substring(uriStartIndex).indexOf(" ");
        if (uriStartIndex <= 0) {
            throw new Exception("There is no url in the request. Please fill all the detail properly.");
        }
        return curlItems.substring(uriStartIndex, uriEndIndex).replaceAll("'", "").trim();
    }

    private static String parseMethodTypeFromString(String curlItems) throws Exception {
        int uriStartIndex = curlItems.indexOf("http");
        if (uriStartIndex <= 0) {
            throw new Exception("There is no url in the request. Please fill all the detail properly.");
        }
        String methodType = curlItems.substring(0, uriStartIndex).replaceAll("(?i)curl", "").replaceAll("(?i)-x", "")
                .trim().replaceAll("'", "");
        if (methodType.isBlank()) {
            methodType = "GET";
        }
        return methodType;
    }

}
