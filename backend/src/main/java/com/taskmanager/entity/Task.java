// src/main/java/com/taskmanager/entity/Task.java

package com.taskmanager.entity;

// Import necessary dependencies
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;



// This annotation tells Spring this class represents a database table
@Entity
// This annotation specifies the table name in the database
@Table(name = "tasks")
// This Lombok annotation automatically generates getters, setters, toString, etc.
@Data
// Java class that represents table in database
public class Task {

    // This will be our primary key (unique identifier) for each task
    @Id
    // This tells the database to automatically generate ID values
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // The title can't be null in the database
    @Column(nullable = false)
    private String title;

    // Allow longer text for description and it can be null
    @Column(length = 1000)
    private String description;

    // When the task was created
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    // When the task is due
    @Column(name = "due_date")
    private LocalDate dueDate;

    // The task status (TODO, IN_PROGRESS, DONE)
    // Store it as a STRING in the database
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskStatus status;

    // Define possible status values
    public enum TaskStatus {
        TODO,
        IN_PROGRESS,
        DONE
    }

    // This method runs automatically before a new task is saved
    // It sets the creation time to now
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}