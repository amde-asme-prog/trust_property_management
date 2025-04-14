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

const ServiceSection = ({
  id,
  icon,
  title,
  description,
  points,
  image,
  reverse = false,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse: boolean;
}) => {
  return (
    <section
      id={id}
      className={`w-full py-12 md:py-24 ${
        id === "residential" || id === "financial" ? "bg-white" : "bg-slate-50"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div
          className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={`${
              reverse
                ? "order-last lg:order-first"
                : "order-first lg:order-last"
            } flex justify-center`}
          >
            <Image
              src={image}
              width={600}
              height={400}
              alt={title}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-slate-100 p-2">
              {icon}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
            <p className="text-slate-500 md:text-lg">{description}</p>
            <ul className="space-y-2">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive property management solutions tailored to your needs
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudiesSection = () => (
  <section className="w-full py-12 md:py-24 bg-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Case Studies
          </h2>
          <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Real-world examples of how our services have benefited our clients
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {
            title: "Residential Property Turnaround",
            description: "Increasing occupancy and rental income",
            content:
              "A residential property owner was struggling with high vacancy rates and low rental income. After implementing our comprehensive management strategy, we increased occupancy to 95% and boosted rental income by 20% within six months.",
          },
          {
            title: "Commercial Space Optimization",
            description: "Maximizing value through strategic management",
            content:
              "A commercial property owner was facing challenges with tenant retention and maintenance costs. Our team implemented a strategic management plan that reduced tenant turnover by 30% and maintenance costs by 25%.",
          },
          {
            title: "Maintenance Cost Reduction",
            description: "Implementing efficient maintenance solutions",
            content:
              "A property owner was struggling with escalating maintenance costs. By implementing our preventative maintenance program and vendor management system, we reduced annual maintenance expenses by 35% while improving property conditions.",
          },
        ].map((study, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">{study.content}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Read Full Case Study
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="w-full py-12 md:py-24 bg-slate-900 text-white">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="text-slate-300 md:text-xl">
            Contact us today to discuss how our property management services can
            benefit you.
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
            className="border-white bg-transparent text-white hover:bg-white hover:text-slate-900"
            asChild
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServiceSection
        id="residential"
        icon={<Home className="h-6 w-6 text-slate-800" />}
        title="Residential Management"
        description="Our comprehensive residential property management services are designed to maximize your property's potential while minimizing your stress."
        points={[
          "Tenant screening and placement",
          "Rent collection and processing",
          "Property inspections and maintenance",
          "Lease enforcement and renewals",
          "24/7 emergency response",
        ]}
        image="/images/residential-management.png"
      />
      <ServiceSection
        id="commercial"
        icon={<Building className="h-6 w-6 text-slate-800" />}
        title="Commercial Management"
        description="Our commercial property management services are tailored to meet the unique needs of business properties, ensuring optimal performance and tenant satisfaction."
        points={[
          "Tenant acquisition and retention",
          "Lease negotiation and administration",
          "Building maintenance and repairs",
          "Financial reporting and analysis",
          "Vendor management and oversight",
        ]}
        image="/images/services.png"
        reverse
      />
      <ServiceSection
        id="financial"
        icon={<DollarSign className="h-6 w-6 text-slate-800" />}
        title="Financial Management"
        description="Our financial management services provide property owners with peace of mind, knowing that their financial matters are being handled with precision and care."
        points={[
          "Rent collection and processing",
          "Expense management and bill payment",
          "Monthly financial statements",
          "Year-end tax preparation assistance",
          "Budget planning and forecasting",
        ]}
        image="/images/commercial-management.png"
      />
      <ServiceSection
        id="maintenance"
        icon={<Wrench className="h-6 w-6 text-slate-800" />}
        title="Maintenance Solutions"
        description="Our maintenance solutions ensure that your property remains in excellent condition, preserving its value and keeping tenants satisfied."
        points={[
          "24/7 emergency repair services",
          "Routine maintenance and inspections",
          "Vendor management and quality control",
          "Preventative maintenance programs",
          "Property improvement recommendations",
        ]}
        image="/images/services.png"
        reverse
      />
      <CaseStudiesSection />
      <CallToActionSection />
    </div>
  );
}
