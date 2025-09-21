package com.cicada.docume.configs;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration.WebFluxConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;

import reactor.core.publisher.Mono;

@Configuration
public class RestClientConfiguration{

    @Value("${executer.threadpool.size}")
    private int executerThreadPoolSize;

    @Bean
    public ExecutorService createThreadPoolForApiCalls() {
        ExecutorService executorService = Executors.newFixedThreadPool(10);
        return executorService;
    }

    
}
