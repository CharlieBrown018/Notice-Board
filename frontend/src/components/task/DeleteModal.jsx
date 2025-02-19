import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../common/Button';

const DeleteModal = ({ isOpen, onClose, onConfirm, isLoading }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
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
                <div className="flex justify-between items-center mb-6 border-b border-dashed border-[--color-ink]/20 pb-4">
                  <Dialog.Title className="font-[--font-heading] text-2xl text-[--color-ink]">
                    Confirm Deletion
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    disabled={isLoading}
                    className="w-8 h-8 flex items-center justify-center hover:bg-[--color-ink]/5 rounded-full transition-colors disabled:opacity-50"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-[--color-ink]/80 mb-6">
                  Are you sure you want to delete this task? This action cannot be undone.
                </p>

                <div className="flex gap-4 pt-6 border-t border-dashed border-[--color-ink]/20">
                  <Button
                    variant="primary"
                    onClick={onConfirm}
                    className="flex-1 py-2.5"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Deleting...' : 'Delete Task'}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={onClose}
                    type="button"
                    className="py-2.5"
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteModal;