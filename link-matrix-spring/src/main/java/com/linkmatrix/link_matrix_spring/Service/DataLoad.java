package com.linkmatrix.link_matrix_spring.Service;

import com.linkmatrix.link_matrix_spring.Model.User;
import com.linkmatrix.link_matrix_spring.Repo.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataLoad {

    @Bean
    public CommandLineRunner dataLoader(UserRepository userRepository) {
        return args -> {
            // Create 5 sample users
            User user1 = new User("John Doe", "john@example.com", "password123");
            User user2 = new User("Jane Smith", "jane@example.com", "password456");
            User user3 = new User("Bob Johnson", "bob@example.com", "password789");
            User user4 = new User("Alice Brown", "alice@example.com", "password101");
            User user5 = new User("Charlie White", "charlie@example.com", "password102");

            // Save users to MongoDB
            userRepository.saveAll(List.of(user1, user2, user3, user4, user5));

            // Optional: Print out the users to confirm
            userRepository.findAll().forEach(user -> System.out.println(user));
        };
    }
}
