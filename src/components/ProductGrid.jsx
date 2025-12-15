import ProductCard from "./ProductCard";

const mobiles = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "Performance with elegant design",
    price: 1199,
    img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300823_0_qhq6qz.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    description: "Innovation meets style and speed",
    price: 999,
    img: "https://www.myg.in/images/thumbnails/300/300/detailed/80/tb1-removebg-preview.png.png",
  },
  {
    id: 3,
    name: "OnePlus 12",
    description: "Speed, design, and power",
    price: 899,
    img: "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/304447_0_rc5ep1.png",
  },
  {
    id: 4,
    name: "Pixel 8 Pro",
    description: "Pure Android experience",
    price: 899,
    img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309134_0_cv9vxa.png?tr=w-600",
  },

  {
  id: 5,
  name: "POCO X7",
  description: "Minimal design with performance",
  price: 749,
  img: "https://i02.appmifile.com/570_operatorx_operatorx_opx/09/01/2025/0adbdc473ff18bd313ae2278a0d961e3.png",
},
{
  id: 6,
  name: "Xiaomi 14 Ultra",
  description: "Flagship camera with Leica optics",
  price: 1099,
  img: "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/306083_rglnk9.png",
},
{
  id: 7,
  name: "Realme GT 6",
  description: "High performance at an low price",
  price: 599,
  img: "https://img-prd-pim.poorvika.com/product/realme-gt-6t-5g-razor-green-256gb-12gb-ram-front-view.png",
},
{
  id: 8,
  name: "iQOO 12",
  description: "Gaming powerhouse with fast charging",
  price: 699,
  img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1701419586053/c26ca793c17f539c6d1dfb10b5b9d586.png",
},

];

export default function ProductsGrid() {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Latest Smartphones
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Designed for performance, crafted for everyday elegance
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {mobiles.map((mobile) => (
            <ProductCard key={mobile.id} mobile={mobile} />
          ))}
        </div>
      </div>
    </section>
  );
}
