import { CheckCircle } from "phosphor-react";

const Lessons = () => {
  return (
    <a>
      <span className="text-gray-300">Tuesday, March 13th - 9:00 AM</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium">
            <CheckCircle size={20} />
          </span>
        </header>
      </div>
    </a>
  );
};

export default Lessons;
