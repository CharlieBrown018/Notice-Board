// src/components/task/TaskSkeleton.jsx
const TaskSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="paper-texture p-8 rounded-lg bg-[--color-paper] shadow-[--shadow-ticket]">
        <div className="flex justify-between items-start mb-5">
          <div className="flex-1">
            <div className="h-4 bg-[--color-ink]/10 rounded w-24 mb-3" />
            <div className="h-6 bg-[--color-ink]/10 rounded w-3/4 mb-3" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-[--color-ink]/10 rounded w-full" />
          <div className="h-4 bg-[--color-ink]/10 rounded w-5/6" />
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="h-4 bg-[--color-ink]/10 rounded w-32" />
          <div className="h-8 bg-[--color-ink]/10 rounded w-24" />
        </div>
      </div>
    </div>
  );
};

export default TaskSkeleton;