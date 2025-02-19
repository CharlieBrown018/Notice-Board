// src/components/task/TaskList.jsx
import { useState, useEffect } from 'react';
import TaskTicket from './TaskTicket';
import TaskSkeleton from './TaskSkeleton';

const TaskList = ({ tasks, onEdit, onDelete, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((n) => (
          <TaskSkeleton key={n} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="paper-texture p-8 rounded-lg bg-[--color-paper] shadow-[--shadow-ticket]">
          <p className="text-[--color-todo] mb-4">Error loading tasks</p>
          <p className="text-[--color-ink]/60">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-[--color-ink]/10 hidden md:block" />
      <div className="space-y-6">
        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[--color-ink]/60 font-[--font-ticket]">
              No tasks yet. Create one to get started!
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskTicket
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;