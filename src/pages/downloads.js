import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Downloads() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Downloads & Resources
        </h1>
        <p className="text-gray-600 mb-8">
          Download our official product catalog, specs, and guides.
        </p>
        <a
          href="/downloads/Legacy_Catalog.pdf"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          download
        >
          Download Product Catalog
        </a>
      </main>
      <Footer />
    </>
  );
}
