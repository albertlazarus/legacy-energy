export default function ProductCard({ name, description, image }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-3" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
