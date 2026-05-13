import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo + Brand */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-2xl flex items-center justify-center">
            <span className="text-white text-3xl">🌍</span>
          </div>
          <h1 className="text-4xl font-bold text-sky-500 tracking-wide">Wanderlust</h1>
        </div>

        {/* Loading Spinner */}
        <div className="relative flex justify-center mb-6">
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-transparent border-t-cyan-500 border-r-sky-500 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Finding your perfect destination...
        </h3>
        <p className="text-gray-500 text-sm">
          This won’t take long
        </p>

        {/* Progress Bar */}
        <div className="w-80 max-w-[320px] h-1.5 bg-gray-100 rounded-full mx-auto mt-10 overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;