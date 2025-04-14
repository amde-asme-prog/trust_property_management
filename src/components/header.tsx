"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Apartments", href: "/apartments" },
    { label: "Inventory", href: "/inventory" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-black">
          <span className="text-xl font-bold">Trust Property Management</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:underline underline-offset-4 text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-4">
          <Button
            variant="outline"
            asChild
            className="border border-gray-300 hover:bg-gray-200"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="text-white bg-gray-900 hover:bg-gray-800">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">
                Trust Property Management
              </span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
