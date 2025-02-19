import { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import TaskList from '../components/task/TaskList';
import TaskModal from '../components/task/TaskModal';
import DeleteModal from '../components/task/DeleteModal';
import Button from '../components/common/Button';
import PaperEffect from '../components/common/PaperEffect';
import api from '../services/api';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const [taskError, setTaskError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setIsLoadingTasks(true);
      setTaskError(null);
      const data = await api.getTasks();
      setTasks(data);
    } catch (error) {
      setTaskError(error.message);
      console.error('Error loading tasks:', error);
    } finally {
      setIsLoadingTasks(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskData = {
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: formData.get('dueDate'),
      status: formData.get('status')
    };

    try {
      setIsLoading(true);
      if (editingTask) {
        await api.updateTask(editingTask.id, taskData);
      } else {
        await api.createTask(taskData);
      }
      await loadTasks();
      closeModal();
    } catch (error) {
      console.error('Error saving task:', error);
      setError('Failed to save task. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (deleteConfirmation) {
      try {
        setIsLoading(true);
        await api.deleteTask(deleteConfirmation);
        await loadTasks();
        setDeleteConfirmation(null);
      } catch (error) {
        console.error('Error deleting task:', error);
        setError('Failed to delete task. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
    setError(null); // Clear any errors when closing modal
  };

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <PaperEffect type="card" hoverable={false} className="p-4 mb-8">
          <div className="flex justify-between items-center">
            <h2 className="font-[--font-heading] text-3xl text-[--color-ink]">Tasks</h2>
            <Button
              variant="ticket"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2"
              disabled={isLoading}
            >
              <PlusIcon className="w-5 h-5" />
              New Task
            </Button>
          </div>
        </PaperEffect>

        <TaskList
          tasks={tasks}
          onEdit={(task) => {
            setEditingTask(task);
            setIsModalOpen(true);
          }}
          onDelete={setDeleteConfirmation}
          isLoading={isLoadingTasks}
          error={taskError}
        />

        {deleteConfirmation && (
          <DeleteModal
            isOpen={!!deleteConfirmation}
            onClose={() => setDeleteConfirmation(null)}
            onConfirm={handleDelete}
            isLoading={isLoading}
          />
        )}

        <TaskModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          task={editingTask}
          onSubmit={handleSubmit}
          mode={editingTask ? 'edit' : 'create'}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Tasks;