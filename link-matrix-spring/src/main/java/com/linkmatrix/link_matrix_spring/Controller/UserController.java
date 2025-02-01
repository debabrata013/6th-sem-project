package com.linkmatrix.link_matrix_spring.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.linkmatrix.link_matrix_spring.Model.SignInRequest;
import com.linkmatrix.link_matrix_spring.Model.User;
import com.linkmatrix.link_matrix_spring.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/user")
public class UserController {
    @Autowired

    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/show")
    public List<User> show_user() {
        return userService.show_user();
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody SignInRequest signInRequest) {
        return userService.signIn(signInRequest);
    }
}