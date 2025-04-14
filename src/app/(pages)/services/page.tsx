import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Building,
  CheckCircle,
  DollarSign,
  Home,
  Wrench,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h1>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive property management solutions tailored to your
                needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Management */}
      <section id="residential" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 p-2">
                <Home className="h-6 w-6 text-slate-800" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Residential Management
              </h2>
              <p className="text-slate-500 md:text-lg">
                Our comprehensive residential property management services are
                designed to maximize your property&apos;s potential while
                minimizing your stress.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Tenant screening and placement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Rent collection and processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Property inspections and maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Lease enforcement and renewals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>24/7 emergency response</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/apartments.jfif"
                width={600}
                height={400}
                alt="Residential Property Management"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Management */}
      <section id="commercial" className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/images/apartments.jfif"
                width={600}
                height={400}
                alt="Commercial Property Management"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-200 p-2">
                <Building className="h-6 w-6 text-slate-800" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Commercial Management
              </h2>
              <p className="text-slate-500 md:text-lg">
                Our commercial property management services are tailored to meet
                the unique needs of business properties, ensuring optimal
                performance and tenant satisfaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Tenant acquisition and retention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Lease negotiation and administration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Building maintenance and repairs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Financial reporting and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Vendor management and oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Management */}
      <section id="financial" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 p-2">
                <DollarSign className="h-6 w-6 text-slate-800" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Financial Management
              </h2>
              <p className="text-slate-500 md:text-lg">
                Our financial management services provide property owners with
                peace of mind, knowing that their financial matters are being
                handled with precision and care.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Rent collection and processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Expense management and bill payment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Monthly financial statements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Year-end tax preparation assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Budget planning and forecasting</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/apartments.jfif"
                width={600}
                height={400}
                alt="Financial Management"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Solutions */}
      <section id="maintenance" className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/images/apartments.jfif"
                width={600}
                height={400}
                alt="Maintenance Solutions"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-200 p-2">
                <Wrench className="h-6 w-6 text-slate-800" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Maintenance Solutions
              </h2>
              <p className="text-slate-500 md:text-lg">
                Our maintenance solutions ensure that your property remains in
                excellent condition, preserving its value and keeping tenants
                satisfied.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>24/7 emergency repair services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Routine maintenance and inspections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Vendor management and quality control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Preventative maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>Property improvement recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Case Studies
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real-world examples of how our services have benefited our
                clients
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Residential Property Turnaround</CardTitle>
                <CardDescription>
                  Increasing occupancy and rental income
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  A residential property owner was struggling with high vacancy
                  rates and low rental income. After implementing our
                  comprehensive management strategy, we increased occupancy to
                  95% and boosted rental income by 20% within six months.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Commercial Space Optimization</CardTitle>
                <CardDescription>
                  Maximizing value through strategic management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  A commercial property owner was facing challenges with tenant
                  retention and maintenance costs. Our team implemented a
                  strategic management plan that reduced tenant turnover by 30%
                  and maintenance costs by 25%.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Cost Reduction</CardTitle>
                <CardDescription>
                  Implementing efficient maintenance solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  A property owner was struggling with escalating maintenance
                  costs. By implementing our preventative maintenance program
                  and vendor management system, we reduced annual maintenance
                  expenses by 35% while improving property conditions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="text-slate-300 md:text-xl">
                Contact us today to discuss how our property management services
                can benefit you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-black"
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white  hover:text-slate-900"
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
