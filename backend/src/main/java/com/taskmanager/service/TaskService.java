// src/main/java/com/taskmanager/service/TaskService.java

package com.taskmanager.service;

import com.taskmanager.dto.TaskDTO;
import com.taskmanager.entity.Task;
import com.taskmanager.exception.TaskNotFoundException;
import com.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service  // Tells Spring this is a service class
public class TaskService {

    // Spring will automatically inject our repository here
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Get all tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get a single task by ID
    public Task getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + id));
    }

    // Create a new task
    public Task createTask(TaskDTO taskDTO) {
        // Convert DTO to entity
        Task task = new Task();
        updateTaskFromDTO(task, taskDTO);

        // Save and return the new task
        return taskRepository.save(task);
    }

    // Update an existing task
    public Task updateTask(Long id, TaskDTO taskDTO) {
        // First find the existing task
        Task existingTask = getTaskById(id);

        // Update its fields
        updateTaskFromDTO(existingTask, taskDTO);

        // Save and return the updated task
        return taskRepository.save(existingTask);
    }

    // Delete a task
    public void deleteTask(Long id) {
        // Check if task exists
        if (!taskRepository.existsById(id)) {
            throw new TaskNotFoundException("Task not found with id: " + id);
        }
        taskRepository.deleteById(id);
    }

    // Helper method to update task fields from DTO
    private void updateTaskFromDTO(Task task, TaskDTO dto) {
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setDueDate(dto.getDueDate());
        task.setStatus(dto.getStatus());
    }
}