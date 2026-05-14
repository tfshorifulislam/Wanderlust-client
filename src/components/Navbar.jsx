"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {


  const {
    data: session
  } = authClient.useSession()
  // console.log(session)

  const user = session?.user;
  console.log('user info', user)


  const handleLogout = async () => {
    await authClient.signOut();
  }

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path
      ? "text-sky-500 border-b-2 border-sky-500 pb-1"
      : "hover:text-sky-500 transition-colors";
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#f3f3f3] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Desktop Menu - Left */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/destinations" className={isActive("/destinations")}>
            Destinations
          </Link>
          <Link href="/bookings" className={isActive("/bookings")}>
            My Bookings
          </Link>
          <Link href="/destinationsAdd" className={isActive("/destinationsAdd")}>
            Add Destination
          </Link>
          <Link href="/admin" className={isActive("/admin")}>
            Admin
          </Link>
        </div>
        {/* Logo */}

        <div>
          <Link href="/" onClick={closeMenu}>
            <h1 className="text-3xl md:text-4xl font-bold text-sky-500 tracking-wide hover:scale-105 transition">
              Wanderlust
            </h1>
          </Link>
        </div>

        {/* Desktop Menu - Right */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {user ?
            <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
              <Link
                href="/profile"
                className={`flex items-center gap-2`}
              >
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </Link>
              <Button onClick={handleLogout} variant="danger">
                Logout
              </Button>
            </div>
            :
            <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
              <Link href="/login" className={isActive("/login")}>
                Login
              </Link>

              <Link href="/signup" className={isActive("/signup")}>
                Sign Up
              </Link>
            </div>}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-5 text-[16px] font-medium">
            {user ? <div className="flex flex-col px-6 py-6 space-y-5 text-[16px] font-medium">
              <Link href="/" onClick={closeMenu} className={isActive("/")}>
                Home
              </Link>
              <Link href="/destinations" onClick={closeMenu} className={isActive("/destinations")}>
                Destinations
              </Link>
              <Link href="/bookings" onClick={closeMenu} className={isActive("/bookings")}>
                My Bookings
              </Link>
              <Link href="/destinationsAdd" onClick={closeMenu} className={isActive("/destinationsAdd")}>
                Add Destination
              </Link>
              <Link href="/admin" onClick={closeMenu} className={isActive("/admin")}>
                Admin
              </Link>

              <div className="pt-4 border-t">
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className={`flex items-center mb-8 gap-2 ${isActive("/profile")}`}
                >
                  <FaRegUser />
                  Profile
                </Link>
                <Button
                  onClick={handleLogout}
                  className='w-full'
                  variant="danger"
                >
                  <BiLogOutCircle />
                  Logout
                </Button>
              </div>
            </div>
              :
              <div className="flex flex-col px-6 py-6 space-y-5 text-[16px] font-medium">
                <Link href="/login" onClick={closeMenu} className={isActive("/login")}>
                  Login
                </Link>
                <Link href="/signup" onClick={closeMenu} className={isActive("/signup")}>
                  Sign Up
                </Link>
              </div>}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;