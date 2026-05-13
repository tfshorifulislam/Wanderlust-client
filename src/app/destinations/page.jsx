import React from 'react';
import DestinationCard from '@/components/DestinationCard';

const Destinations = async () => {
  const res = await fetch('http://localhost:5000/destinations', {
    cache: 'no-store'
  });

  const destinations = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Explore All Destinations
          </h1>
          <p className="text-gray-600 text-lg">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">CATEGORY</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500">
              <option value="">All Categories</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="City">City</option>
              <option value="Adventure">Adventure</option>
              <option value="Luxury">Luxury</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">PRICE RANGE</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500">
              <option value="">Any Price</option>
              <option value="0-500">$0 - $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-1500">$1000 - $1500</option>
              <option value="1500+">$1500+</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">SORT BY</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500">
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Showing Results */}
        <p className="text-gray-600 mb-6 pl-2">
          Showing <span className="font-semibold">{destinations.length}</span> destinations
        </p>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest._id || dest.destinationName} dest={dest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;