package com.linkmatrix.link_matrix_spring.Repo;

import com.linkmatrix.link_matrix_spring.Model.University;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniversityRepository extends MongoRepository<University, String> {
}
