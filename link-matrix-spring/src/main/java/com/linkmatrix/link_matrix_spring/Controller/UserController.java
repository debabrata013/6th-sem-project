package com.linkmatrix.link_matrix_spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.linkmatrix.link_matrix_spring.Model.User;
import com.linkmatrix.link_matrix_spring.Repo.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/store")
    public ResponseEntity<String> saveUser(@RequestBody User user){
        userRepository.save(user);
        return ResponseEntity.ok("User saved succesfully");
    }
    
 

}
