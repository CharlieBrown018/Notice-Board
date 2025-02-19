// src/main/java/com/taskmanager/dto/TaskDTO.java

package com.taskmanager.dto;

import lombok.Data;
import com.taskmanager.entity.Task.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

// Generate getters, setters, etc.
@Data
// Middleman between frontend and entity, it defines what data to receive from  frontend when creating or updating a task.
public class TaskDTO {

    // @NotBlank means this field can't be null or empty
    @NotBlank(message = "Title is required")
    private String title;

    // This can be null
    private String description;

    // This can be null
    private LocalDate dueDate;

    // @NotNull means this field must have a value
    @NotNull(message = "Status is required")
    private TaskStatus status;
}