import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Trust Property Management</h3>
            <p className="text-slate-300">
              Professional property management services you can trust. We handle
              the details so you don&apos;t have to.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-slate-300 hover:text-white"
                >
                  Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="text-slate-300 hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#residential"
                  className="text-slate-300 hover:text-white"
                >
                  Residential Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services#commercial"
                  className="text-slate-300 hover:text-white"
                >
                  Commercial Management
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?type=rent"
                  className="text-slate-300 hover:text-white"
                >
                  Rental Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?type=buy"
                  className="text-slate-300 hover:text-white"
                >
                  Properties For Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="text-slate-300 hover:text-white"
                >
                  Equipment Rental
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-slate-300" />
                <span className="text-slate-300">
                  123 Property Lane, Suite 100
                  <br />
                  Anytown, ST 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-slate-300" />
                <Link
                  href="tel:+11234567890"
                  className="text-slate-300 hover:text-white"
                >
                  (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-slate-300" />
                <Link
                  href="mailto:info@trustpm.com"
                  className="text-slate-300 hover:text-white"
                >
                  info@trustpm.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-300">
          <p>
            &copy; {new Date().getFullYear()} Trust Property Management. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
