'use client';
import { FaUser, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';

const WanderlustSignUp = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="w-full max-w-[720px] border border-[#e2e8f0] rounded-2xl bg-white shadow-sm p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-1">Start your adventure with Wanderlust</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaUser />
              </div>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#14b8a6] transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#14b8a6] transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#14b8a6] transition-colors"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#14b8a6] transition-colors"
              />
            </div>
          </div>

          {/* Create Account Button */}
          <button className="w-full cursor-pointer bg-sky-500 hover:bg-sky-700 text-white font-medium py-3.5 rounded-xl transition-colors mt-4">
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">Or sign up with</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google Button */}
          <button className="w-full border cursor-pointer border-gray-200 hover:bg-gray-50 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-colors">
            <FaGoogle className="text-red-500" />
            <span className="font-medium text-gray-700">Sign Up With Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="#" className="text-sky-500 hover:underline font-medium">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WanderlustSignUp;