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

import com.linkmatrix.link_matrix_spring.Model.User;
import com.linkmatrix.link_matrix_spring.Repo.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<String> saveUser(@RequestBody User user){
        userRepository.save(user);
        System.out.println("User saved: " + user.getUsername());
        return ResponseEntity.ok("User saved: " + user.getUsername());
    }

    @GetMapping("/show")
    public List<User> show_user(){
        return userRepository.findAll();
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody SignInRequest signInRequest) {
        try {
          
            // Check for null values
            if (signInRequest.getEmail() == null || signInRequest.getPassword() == null) {
                return ResponseEntity.status(400).body("Username and password must not be null");
            }

            // Find user by username
            Optional<User> foundUser = userRepository.findByEmail(signInRequest.getEmail());
            if (foundUser.isPresent()) {
                User user = foundUser.get();
            
                if (user.getPassword().equals(signInRequest.getPassword())) {
                    return ResponseEntity.ok("Sign-in successful");
                } else {
                    return ResponseEntity.status(401).body("Invalid username or password");
                }
            } else {
                return ResponseEntity.status(401).body("Invalid username or password");
            }
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal server error");
        }
    }
}