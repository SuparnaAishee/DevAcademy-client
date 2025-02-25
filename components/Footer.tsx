import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

// Payment methods array with icons/logos
const paymentMethods = [
  { name: "Visa", icon: "/payment-icons/visa.svg" },
  { name: "Mastercard", icon: "/payment-icons/mastercard.svg" },
  { name: "American Express", icon: "/payment-icons/amex.svg" },
  { name: "bKash", icon: "/payment-icons/bkash.svg" },
  { name: "Nagad", icon: "/payment-icons/nagad.svg" },
  { name: "Rocket", icon: "/payment-icons/rocket.svg" },
  { name: "UCB", icon: "/payment-icons/ucb.svg" },
  { name: "City Bank", icon: "/payment-icons/citybank.svg" },
  { name: "EBL", icon: "/payment-icons/ebl.svg" },
  { name: "DBBL", icon: "/payment-icons/dbbl.svg" },
  // Add more payment methods as needed
];

// App download options
const downloadOptions = [
  {
    name: "Google Play",
    icon: "/store-icons/google-play.svg",
    link: "#",
  },
  {
    name: "App Store",
    icon: "/store-icons/app-store.svg",
    link: "#",
  },
  {
    name: "Windows",
    icon: "/store-icons/windows.svg",
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-100 pl-12 pr-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us Section */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We are dedicated to providing quality education and helping
              students achieve their career goals through comprehensive online
              courses.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Ka-6/a, Navana Sylvania
              </li>
              <li className="text-sm text-muted-foreground">
                Baridhara Road, Nadda, Gulshan-2
              </li>
              <li className="text-sm text-muted-foreground">
                Dhaka-1212, Bangladesh
              </li>
              <li className="text-sm text-muted-foreground">
                Email: support@example.com
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold mb-4">Download Our App</h3>
            <div className="flex flex-col gap-3">
              {downloadOptions.map((option) => (
                <Link
                  key={option.name}
                  href={option.link}
                  className="inline-block bg-background hover:bg-accent rounded-lg p-2 transition-colors"
                >
                  <Image
                    src={option.icon || "/placeholder.svg"}
                    alt={option.name}
                    width={135}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t pt-6">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="bg-white p-2 rounded-md shadow-sm"
              >
                <Image
                  src={method.icon || "/placeholder.svg"}
                  alt={method.name}
                  width={40}
                  height={25}
                  className="h-6 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-muted-foreground mt-6">
          <p>© {new Date().getFullYear()} DevAcademy. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
