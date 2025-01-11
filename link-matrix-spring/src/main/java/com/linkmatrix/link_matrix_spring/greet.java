package com.linkmatrix.link_matrix_spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class greet {
    @GetMapping("/")
public String greetuseer(){
    return "Hello from manas";
}

}
