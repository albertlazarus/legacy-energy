export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">LEGACY</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/products" className="hover:text-yellow-400">Products</a>
          <a href="/downloads" className="hover:text-yellow-400">Downloads</a>
          <a href="/blog" className="hover:text-yellow-400">Blog</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
