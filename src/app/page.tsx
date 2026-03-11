import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Infrastructure from "@/components/Infrastructure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
