export default function ProductCard({ name, desc }) {
  return (
    <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-blue-800 mb-2">{name}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
