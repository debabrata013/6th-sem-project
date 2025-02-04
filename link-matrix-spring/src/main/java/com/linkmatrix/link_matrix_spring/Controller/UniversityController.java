package com.linkmatrix.link_matrix_spring.Controller;

import com.linkmatrix.link_matrix_spring.Model.University;
import com.linkmatrix.link_matrix_spring.Service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/superadmin")
public class UniversityController {

    @Autowired
    private UniversityService universityService;

    @PostMapping("/AddUniversity")
    public ResponseEntity<University> addUniversity(@RequestBody University university) {
        University savedUniversity = universityService.addUniversity(university);
        return ResponseEntity.ok(savedUniversity);
    }
    @GetMapping("/show")
    public ResponseEntity<?> getAllUniversities() {
        return ResponseEntity.ok(universityService.getAllUniversities());
    }

}
