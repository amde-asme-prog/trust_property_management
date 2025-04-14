import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building,
  CheckCircle,
  Home,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FaqsPage from "@/components/faq";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Trust Property Management
                </h1>
                <p className="text-slate-500 md:text-xl">
                  Professional property management services you can trust. We
                  handle the details so you don&apos;t have to.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="text-white bg-gray-900 hover:bg-gray-800"
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border border-gray-300 hover:bg-gray-200"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/apartments.png"
                width={550}
                height={550}
                alt="Property Management"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive property management solutions tailored to your
                needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <Home className="h-10 w-10 text-slate-800 mb-2" />
                <CardTitle>Residential Management</CardTitle>
                <CardDescription>
                  Complete management services for residential properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Tenant screening and placement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Rent collection and processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Property inspections</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border border-gray-200 hover:bg-gray-200"
                >
                  <Link href="/services#residential">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Building className="h-10 w-10 text-slate-800 mb-2" />
                <CardTitle>Commercial Management</CardTitle>
                <CardDescription>
                  Expert management for commercial properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Lease negotiation and administration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Tenant relations management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Facility maintenance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border border-gray-200 hover:bg-gray-200"
                >
                  <Link href="/services#commercial">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-slate-800 mb-2" />
                <CardTitle>Maintenance Solutions</CardTitle>
                <CardDescription>
                  24/7 maintenance and repair services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Emergency repair services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Routine maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Vendor management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border border-gray-200 hover:bg-gray-200"
                >
                  <Link href="/services#maintenance">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Clients Say
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients have to say about our services.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                </div>
                <CardTitle className="text-lg">John Smith</CardTitle>
                <CardDescription>Property Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500">
                  &quot;Trust Property Management has been handling my rental
                  properties for over 3 years now. Their professionalism and
                  attention to detail have made my life so much easier.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                </div>
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <CardDescription>Commercial Property Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500">
                  &quot;The team at Trust Property Management has been
                  exceptional in managing my commercial properties. Their
                  expertise in tenant relations and maintenance has been
                  invaluable.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                </div>
                <CardTitle className="text-lg">Michael Brown</CardTitle>
                <CardDescription>Tenant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500">
                  &quot;As a tenant, I&apos;ve been impressed with how
                  responsive Trust Property Management is. Maintenance requests
                  are handled promptly and professionally.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* faq */}

      <FaqsPage />
      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="text-slate-300 md:text-xl">
                Let us handle your property management needs so you can focus on
                what matters most to you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-black hover:bg-gray-200 "
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
