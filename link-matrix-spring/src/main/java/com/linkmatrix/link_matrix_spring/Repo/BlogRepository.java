package com.linkmatrix.link_matrix_spring.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.linkmatrix.link_matrix_spring.Model.Blog;

@Repository
public interface BlogRepository extends MongoRepository<Blog, String> {
    
        
}   
