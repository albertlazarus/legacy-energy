export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Legacy Energy. All rights reserved.
        </p>
        <p className="text-sm mt-2 md:mt-0">
          Headquarters: Chennai, India
        </p>
      </div>
    </footer>
  );
}
