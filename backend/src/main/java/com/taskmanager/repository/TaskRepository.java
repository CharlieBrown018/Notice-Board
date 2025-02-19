// src/main/java/com/taskmanager/repository/TaskRepository.java

package com.taskmanager.repository;

import com.taskmanager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// @Repository tells Spring this is a repository interface
@Repository
// JpaRepository<Task, Long>: Task is the entity type, Long is the type of the ID field
// interface that provides methods to interact with the database
public interface TaskRepository extends JpaRepository<Task, Long> {
    // Built-in methods we get from JpaRepository:
    // findAll() - Get all tasks
    // findById(Long id) - Find task by ID
    // save(Task task) - Create or update a task
    // deleteById(Long id) - Delete task by ID
    // count() - Count total tasks
    // existsById(Long id) - Check if task exists

    // We can add custom query methods by just declaring them:
    // Spring will automatically implement these based on the method name!

    // Find tasks by status
    List<Task> findByStatus(Task.TaskStatus status);

    // Find tasks by title containing some text (case-insensitive)
    List<Task> findByTitleContainingIgnoreCase(String titlePart);

    // Find tasks by status ordered by due date
    List<Task> findByStatusOrderByDueDateAsc(Task.TaskStatus status);

    // Count tasks by status
    long countByStatus(Task.TaskStatus status);
}