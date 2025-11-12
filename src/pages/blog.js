import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const articles = [
  {
    title: "Choosing the Right Battery for Solar Power",
    desc: "Understand how deep-cycle batteries improve solar storage efficiency.",
  },
  {
    title: "How to Extend Battery Life and Efficiency",
    desc: "Simple maintenance tips to maximize your lead-acid battery lifespan.",
  },
  {
    title: "Why Legacy Energy Batteries Stand Apart",
    desc: "Inside our quality-driven approach to battery design and performance.",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Insights & Articles
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <BlogCard key={i} {...a} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
