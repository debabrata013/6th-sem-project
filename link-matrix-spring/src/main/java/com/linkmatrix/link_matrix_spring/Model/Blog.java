package com.linkmatrix.link_matrix_spring.Model;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import javax.persistence.PrePersist;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Blog")
public class Blog {
    @Id
    private String id;
    private String title;
    private String content;
    private String author;
    private String date;
    private int likes;
    private List<String> comments;

    public Blog(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
        this.likes = 0;
        this.comments = new ArrayList<>();
    }

    public void addComment(String comment) {
        this.comments.add(comment);
    }

    public void incrementLikes() {
        this.likes++;
    }

    @PrePersist
    public void prePersist() {
        this.date = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public String getAuthor() {
        return author;
    }

    public String getDate() {
        return date;
    }

    public int getLikes() {
        return likes;
    }

    public List<String> getComments() {
        return comments;
    }
}
