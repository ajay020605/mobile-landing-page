import Navbar from "../components/Navbar.jsx";
import MobileSlider from "../components/MobileSlider.jsx";
import ProductsGrid from "../components/ProductGrid.jsx";
import CTASection from "../components/CTASection.jsx";

export default function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <MobileSlider />
      <ProductsGrid />
      <CTASection />
    </div>
  );
}
