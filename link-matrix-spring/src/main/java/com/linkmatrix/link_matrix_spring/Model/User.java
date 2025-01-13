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
@Document(collection = "users") // Name of the MongoDB collection
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;

    // Profile Information
    private String profilePicture; // URL or file path
    private byte[] profileImage;
    private String bio;
    private String interests; // Comma-separated interests
    private int connections;

    // Educational Information
    private String college;
    private String department;
    private int yearOfEnrollment;
    private int yearOfGraduation;
    private String degree;

    // Professional Information
    private String company;
    private String designation;
    private String industry;
    private int yearsOfExperience;
    private String linkedInProfile;
    private List<String> skills; // List of skills instead of comma-separated string

    // Contact Information
    private String phoneNumber;
    private String address;

    // System Fields
    private boolean mentorStatus;
    private boolean alumniStatus;
    private String accountStatus; // Active, Inactive, or Banned
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
