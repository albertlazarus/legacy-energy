import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "DriveLine Series",
    desc: "Heavy-duty automotive batteries engineered for long life and reliability.",
  },
  {
    name: "SolarVolt Series",
    desc: "Optimized for solar energy storage with deep cycle performance.",
  },
  {
    name: "PowerCore Series",
    desc: "Industrial-grade batteries for high power applications.",
  },
  {
    name: "Custom Solutions",
    desc: "Tailor-made batteries built to your exact specifications.",
  },
];

export default function Products() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-44xl font-bold text-blue-800 mb-8 text-center">
          Our Product Range
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
