import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-4">
          Have questions or want to request a quote? Reach out anytime.
        </p>
        <p className="text-gray-700 font-medium">
          📧 Email: albertlazarus@connectinglegacy.com
        </p>
      </main>
      <Footer />
    </>
  );
}
