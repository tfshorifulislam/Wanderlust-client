"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  // Active link style
  const isActive = (path) => {
    return pathname === path 
      ? "text-sky-500 border-b-2 border-sky-500 pb-1" 
      : "hover:text-sky-500 transition-colors";
  };

  return (
    <nav className="bg-[#f3f3f3] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Menu */}
        <div className="flex items-center gap-8 text-[15px] font-medium">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>

          <Link href="/destinations" className={isActive("/destinations")}>
            Destinations
          </Link>

          <Link href="/bookings" className={isActive("/bookings")}>
            My Bookings
          </Link>

          <Link href="/admin" className={isActive("/admin")}>
            Admin
          </Link>
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-4xl font-bold text-sky-500 tracking-wide hover:scale-105 transition">
              Wanderlust
            </h1>
          </Link>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-8 text-[15px] font-medium">
          <Link 
            href="/profile" 
            className={`flex items-center gap-2 ${isActive("/profile")}`}
          >
            <FaRegUser />
            Profile
          </Link>

          <Link href="/login" className={isActive("/login")}>
            Login
          </Link>

          <Link href="/signup" className={isActive("/signup")}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;