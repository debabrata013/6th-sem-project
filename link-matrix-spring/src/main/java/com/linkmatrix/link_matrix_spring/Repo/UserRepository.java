package com.linkmatrix.link_matrix_spring.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.linkmatrix.link_matrix_spring.Model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // public User findByEmail(String email);

}

