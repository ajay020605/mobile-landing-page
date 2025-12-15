import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    tagline: "Titanium power. Pro performance.",
    img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300823_0_qhq6qz.png",
  },
  {
    id: 2,
    name: "Galaxy S24",
    tagline: "Galaxy AI. Built for tomorrow.",
    img: "https://www.myg.in/images/thumbnails/300/300/detailed/80/tb1-removebg-preview.png.png",
  },
  {
    id: 3,
    name: "OnePlus 12",
    tagline: "Smooth beyond speed.",
    img: "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/304447_0_rc5ep1.png",
  },
];

export default function MobileSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative mt-20 h-[520px] overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black rounded-2xl">

      {/* Blue glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-blue-600/20 blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16"
        >
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {slides[current].name}
            </h1>
            <p className="mt-4 text-blue-200 text-lg">
              {slides[current].tagline}
            </p>

            <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
              Explore
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={slides[current].img}
              alt={slides[current].name}
              className="w-64 md:w-80 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              i === current ? "w-6 bg-blue-500" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
