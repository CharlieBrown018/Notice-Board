import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import DateStamp from '../common/DateStamp';
import StatusBadge from '../common/StatusBadge';
import PaperEffect from '../common/PaperEffect';
import PushPin from '../common/PushPin';

const TaskTicket = ({ task, onEdit, onDelete }) => {
  return (
    <div className="relative group animate-slide-in">
      <PushPin />

      <PaperEffect type="ticket" className="transform transition-all duration-300">
        <div className="relative p-8 pb-6 rounded-lg bg-[--color-paper] notebook-paper notebook-margin">
          {/* Paper Holes */}
          <div className="absolute -left-3 top-1/3 w-2 h-2 rounded-full bg-[--color-ink]/10 shadow-inner" />
          <div className="absolute -left-3 top-2/3 w-2 h-2 rounded-full bg-[--color-ink]/10 shadow-inner" />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <DateStamp
                    date={task.createdAt}
                    className="text-sm"
                    label="Created"
                  />
                  <DateStamp
                    date={task.dueDate}
                    className="text-sm"
                    label="Due"
                  />
                </div>
                <h3 className="font-[--font-heading] text-2xl text-[--color-ink] tracking-wide mb-3 pl-4 py-2">
                  {task.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="relative flex gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-auto">
                <button
                  onClick={() => onEdit(task)}
                  className="p-3 rounded-md border border-[--color-ink]/10 shadow-sm
                            hover:bg-[--color-ink]/10 hover:scale-105 hover:shadow-md
                            transition-all duration-200 bg-[--color-paper]"
                  title="Edit Task"
                >
                  <PencilIcon className="w-5 h-5 text-[--color-ink]" />
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="p-3 rounded-md border border-[--color-todo]/30 shadow-sm
                            hover:bg-[--color-todo]/15 hover:scale-105 hover:shadow-md
                            transition-all duration-200 text-[--color-todo] bg-[--color-paper]"
                  title="Delete Task"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-[--color-ink]/80 mb-8 font-[--font-ticket] text-base leading-8 tracking-wide pl-8">
              {task.description}
            </p>

            {/* Footer */}
            <div className="flex justify-end items-center text-base pt-4 border-t border-[--color-ink]/10">
              <StatusBadge status={task.status} />
            </div>
          </div>
        </div>
      </PaperEffect>
    </div>
  );
};

export default TaskTicket;