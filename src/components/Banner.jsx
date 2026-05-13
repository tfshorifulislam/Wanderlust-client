import { Separator } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative bg-[url('/assets/Banner.png')] bg-cover bg-center bg-no-repeat min-h-[580px] md:min-h-[650px] flex flex-col text-white">

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center px-5 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="uppercase bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition-all text-sm md:text-base">
            Explore Now
          </button>

          <Link href="/destinations">
            <button className="uppercase border-2 border-white/80 cursor-pointer hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold transition-all text-sm md:text-base">
              View Destinations
            </button>
          </Link>
        </div>
      </div>

      {/* Search/Filter Bar */}
      <div className="relative bg-white/10 backdrop-blur-md border-t border-white/20 py-5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:flex md:items-center md:justify-between bg-white/10 rounded-3xl p-2 md:p-3">

            {/* Location */}
            <div className="px-4 py-2 md:py-3 border-b md:border-b-0 md:border-r border-white/20">
              <h3 className="text-xs uppercase tracking-widest text-white/70">Location</h3>
              <p className="text-sm md:text-base font-medium">Bali, Indonesia</p>
            </div>

            {/* Date */}
            <div className="px-4 py-2 md:py-3 border-b md:border-b-0 md:border-r border-white/20">
              <h3 className="text-xs uppercase tracking-widest text-white/70">When</h3>
              <p className="text-sm md:text-base font-medium">Anytime • 7 Days</p>
            </div>

            {/* Budget */}
            <div className="px-4 py-2 md:py-3 border-b md:border-b-0 md:border-r border-white/20">
              <h3 className="text-xs uppercase tracking-widest text-white/70">Budget</h3>
              <p className="text-sm md:text-base font-medium">$500 - $3000</p>
            </div>

            {/* People */}
            <div className="px-4 py-2 md:py-3">
              <h3 className="text-xs uppercase tracking-widest text-white/70">Travelers</h3>
              <p className="text-sm md:text-base font-medium">2 - 8 People</p>
            </div>

            {/* Search Button */}
            <div className="md:ml-auto col-span-2 md:col-span-1 flex items-center justify-center mt-3 md:mt-0">
              <button className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-4 rounded-2xl transition-all text-base">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;