export default function BlogCard({ title, excerpt, date }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{date}</p>
      <p className="text-gray-700">{excerpt}</p>
    </div>
  );
}
