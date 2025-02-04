package com.linkmatrix.link_matrix_spring.Service;

import com.linkmatrix.link_matrix_spring.Model.University;
import com.linkmatrix.link_matrix_spring.Repo.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UniversityService {
    @Autowired
    private UniversityRepository universityRepository;

    public University addUniversity(University university) {
        return universityRepository.save(university);
    }

    public Object getAllUniversities() {
        return universityRepository.findAll();
    }
}
