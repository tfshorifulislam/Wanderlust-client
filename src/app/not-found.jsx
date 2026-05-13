import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="text-[120px] md:text-[160px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-sky-300 leading-none select-none">
            404
          </div>
        </div>

        {/* Travel Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-white shadow-xl rounded-3xl flex items-center justify-center border border-gray-100">
            🗺️
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-3">
          Lost in Paradise?
        </h1>
        
        <p className="text-gray-600 text-lg mb-8">
          Oops! The destination you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            Back to Home
          </Link>

          <Link
            href="/destinations"
            className="px-8 py-4 border-2 border-gray-300 hover:border-cyan-500 text-gray-700 font-semibold rounded-2xl hover:bg-cyan-50 transition-all duration-300"
          >
            Explore Destinations
          </Link>
        </div>

        <p className="text-gray-500 mt-10 text-sm">
          Need help? Contact our support team
        </p>
      </div>
    </div>
  );
};

export default NotFound;