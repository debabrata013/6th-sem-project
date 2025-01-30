package com.linkmatrix.link_matrix_spring.Model;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "universites") // Name of the MongoDB collection
public class University {

    @Id
    private String id; // Use String for MongoDB ObjectId
    private String name;
    private String location;
    private int studentsEnrolled;
    private String registrationDate;
    private String status;

}
