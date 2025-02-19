import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../common/Button';

const TaskModal = ({ isOpen, closeModal, task, onSubmit, mode = 'create', isLoading, error }) => {
  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      const form = document.getElementById('taskForm');
      if (form) form.reset();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    onSubmit(e);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => !isLoading && closeModal()} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[--color-cork]/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="paper-texture w-full max-w-md rounded-lg shadow-[--shadow-raised] relative">
              <div className="p-6 border-2 border-[--color-ink]/10 rounded-lg">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-dashed border-[--color-ink]/20 pb-4">
                  <Dialog.Title className="font-[--font-heading] text-2xl text-[--color-ink]">
                    {mode === 'create' ? 'New Task Entry' : 'Edit Task Entry'}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    disabled={isLoading}
                    className="w-8 h-8 flex items-center justify-center hover:bg-[--color-ink]/5 rounded-full transition-colors
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm animate-shake">
                    <p className="font-medium">Error</p>
                    <p>{error}</p>
                  </div>
                )}

                {/* Form */}
                <form id="taskForm" onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-[--color-ink]/80">
                      Title <span className="text-[--color-todo]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="title"
                        type="text"
                        name="title"
                        defaultValue={task?.title}
                        className={`
                          w-full px-4 py-2.5 paper-texture rounded-lg border-2
                          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'border-[--color-ink]/20'}
                          focus:border-[--color-ink]/40 focus:outline-none transition-colors
                          shadow-inner text-[--color-ink]
                        `}
                        required
                        disabled={isLoading}
                        placeholder="Enter task title"
                      />
                      {isLoading && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 border-2 border-[--color-ink]/20 border-t-[--color-ink]/40 rounded-full animate-spin" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-[--color-ink]/80">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      defaultValue={task?.description}
                      className={`
                        w-full px-4 py-2.5 paper-texture rounded-lg border-2
                        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'border-[--color-ink]/20'}
                        focus:border-[--color-ink]/40 focus:outline-none transition-colors
                        shadow-inner text-[--color-ink] resize-none
                      `}
                      disabled={isLoading}
                      placeholder="Enter task description (optional)"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-[--color-ink]/80">
                        Due Date
                      </label>
                      <input
                        id="dueDate"
                        type="date"
                        name="dueDate"
                        defaultValue={task?.dueDate}
                        className={`
                          w-full px-4 py-2.5 paper-texture rounded-lg border-2
                          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'border-[--color-ink]/20'}
                          focus:border-[--color-ink]/40 focus:outline-none transition-colors
                          shadow-inner text-[--color-ink]
                        `}
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="status" className="block mb-2 text-sm font-medium text-[--color-ink]/80">
                        Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        defaultValue={task?.status || 'TODO'}
                        className={`
                          w-full px-4 py-2.5 paper-texture rounded-lg border-2
                          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'border-[--color-ink]/20'}
                          focus:border-[--color-ink]/40 focus:outline-none transition-colors
                          shadow-inner text-[--color-ink]
                        `}
                        disabled={isLoading}
                      >
                        <option value="TODO">To Do</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="DONE">Done</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-dashed border-[--color-ink]/20">
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex-1 py-2.5"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                          <span>{mode === 'create' ? 'Creating...' : 'Updating...'}</span>
                        </div>
                      ) : (
                        mode === 'create' ? 'Create Task' : 'Update Task'
                      )}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={closeModal}
                      type="button"
                      className="py-2.5"
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TaskModal;