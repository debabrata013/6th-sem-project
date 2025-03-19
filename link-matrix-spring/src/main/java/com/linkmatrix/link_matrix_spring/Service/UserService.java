package com.linkmatrix.link_matrix_spring.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.linkmatrix.link_matrix_spring.Model.Blog;
import com.linkmatrix.link_matrix_spring.Model.SignInRequest;
import com.linkmatrix.link_matrix_spring.Model.User;
import com.linkmatrix.link_matrix_spring.Repo.BlogRepository;
import com.linkmatrix.link_matrix_spring.Repo.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<String> saveUser(User user) {
        userRepository.save(user);
        System.out.println("User saved: " + user.getUsername());
        return ResponseEntity.ok("User saved: " + user.getUsername());
    }

    public List<User> show_user() {
        return userRepository.findAll();

    }

    public ResponseEntity<String> signIn(SignInRequest signInRequest) {
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

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> show_blog() {
       return blogRepository.findAll();
    }

    public ResponseEntity<String> saveBlog(Blog blog) {
        // Ensure the date is set
        if (blog.getDate() == null || blog.getDate().isEmpty()) {
            blog.setDate(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
        }
        blogRepository.save(blog);
      System.out.println("Blog saved: " + blog.getTitle());
        return ResponseEntity.ok("Blog saved: " + blog.getTitle());
    }
    public ResponseEntity<String> likeBlog(String blogId) {
        Optional<Blog> blogOpt = blogRepository.findById(blogId);
        if (blogOpt.isPresent()) {
            Blog blog = blogOpt.get();
            blog.incrementLikes();
            blogRepository.save(blog);
            return ResponseEntity.ok("Blog liked successfully");
        } else {
            return ResponseEntity.status(404).body("Blog not found");
        }
    }

    public ResponseEntity<String> addComment(String blogId, String comment) {
        Optional<Blog> blogOpt = blogRepository.findById(blogId);
        if (blogOpt.isPresent()) {
            Blog blog = blogOpt.get();
            blog.addComment(comment);
            blogRepository.save(blog);
            return ResponseEntity.ok("Comment added successfully");
        } else {
            return ResponseEntity.status(404).body("Blog not found");
        }
    }

}