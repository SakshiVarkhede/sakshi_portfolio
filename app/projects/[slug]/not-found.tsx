import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-gradient">404</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Project not found</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-primary text-white font-semibold rounded-lg hover:bg-orange-light hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

