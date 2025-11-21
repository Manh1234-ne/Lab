export default function Button({ label, onclick }) {
  return (
    <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition active:scale-95">
      {label}
    </button>
  );
}
