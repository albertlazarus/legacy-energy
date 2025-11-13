import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Powering Progress with Reliable Energy
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At Legacy Energy, we design and deliver premium lead-acid batteries
          built for performance, endurance, and sustainability — from
          automotive to solar applications.
        </p>
        <Link
          href="/products"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Explore Our Products
        </Link>
      </main>
      <Footer />
    </>
  );
}
