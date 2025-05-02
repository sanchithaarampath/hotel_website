import Navbar from "../components/Navbar";  // Correct path
import Footer from "../components/Footer";// Create Footer component as shown earlier

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <main className="p-8 min-h-screen bg-white">
        <h1 className="text-3xl font-bold mb-6">Welcome to Visit Sri Lanka</h1>
        <p className="text-lg">Explore beautiful destinations, book your stays, and enjoy your trip!</p>

        {/* Add more home content here */}
      </main>

      <Footer />
    </div>
  );
}
