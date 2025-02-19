// src/main/java/com/taskmanager/exception/TaskNotFoundException.java

package com.taskmanager.exception;

public class TaskNotFoundException extends RuntimeException {
    public TaskNotFoundException(String message) {
        super(message);
    }
}