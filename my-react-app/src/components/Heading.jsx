export default function Heading({ label }) {
  return (
    <h2 className="text-3xl font-bold text-blue-700 uppercase tracking-wider mb-2 
    relative inline-block">

      {label}

      <span className="absolute left-0 bottom-[-6px] w-full h-[4px] bg-blue-500 rounded-full"></span>
    </h2>
  );
}
