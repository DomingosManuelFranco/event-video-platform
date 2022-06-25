import Lessons from "./Lessons";

const Sidebar = () => {
  return (
    <aside className="w-[348] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Lessons Schedule
      </span>
      <div className="flex flex-col gap-8">
        <Lessons />
        <Lessons />
        <Lessons />
        <Lessons />
        <Lessons />
        <Lessons />
      </div>
    </aside>
  );
};

export default Sidebar;
