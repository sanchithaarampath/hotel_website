import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p>Learn more about our mission and the team behind the platform.</p>
      </main>
      <Footer />
    </div>
  );
}
