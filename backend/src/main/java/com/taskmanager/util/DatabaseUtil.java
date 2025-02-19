// src/main/java/com/taskmanager/util/DatabaseUtil.java

package com.taskmanager.util;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class DatabaseUtil implements CommandLineRunner {

    @Override
    public void run(String... args) {
        try {
            Path dbDir = Paths.get("src/main/db");
            if (!Files.exists(dbDir)) {
                Files.createDirectories(dbDir);
                System.out.println("Created database directory at: " + dbDir.toAbsolutePath());
            }
            System.out.println("Database initialized successfully!");
        } catch (Exception e) {
            System.err.println("Error initializing database directory: " + e.getMessage());
            throw new RuntimeException(e);
        }
    }
}