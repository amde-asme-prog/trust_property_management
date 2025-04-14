import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Star, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Trust Property Management
              </h1>
              <p className="text-slate-500 md:text-xl">
                We&apos;re dedicated to providing exceptional property
                management services with integrity, transparency, and a
                commitment to excellence.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/about-us.png"
                width={600}
                height={400}
                alt="Trust Property Management Team"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Our Mission
              </h2>
              <p className="text-slate-500">
                At Trust Property Management, our mission is to provide property
                owners with peace of mind through exceptional management
                services while ensuring tenants enjoy comfortable,
                well-maintained living and working spaces.
              </p>
              <p className="text-slate-500">
                We strive to maximize property values and rental income while
                minimizing expenses and vacancies, creating a win-win situation
                for all stakeholders involved.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Our Vision
              </h2>
              <p className="text-slate-500">
                We aim to be the most trusted property management company in the
                region, known for our integrity, transparency, and commitment to
                excellence in every aspect of our service.
              </p>
              <p className="text-slate-500">
                Our vision is to continuously innovate and improve our services,
                leveraging technology and industry best practices to exceed
                client expectations and set new standards in property
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Journey
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From humble beginnings to industry leadership
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2010 - Foundation</h3>
                  <p className="text-slate-500">
                    Trust Property Management was founded with a vision to
                    transform the property management industry through
                    exceptional service and innovative solutions.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2015 - Expansion</h3>
                  <p className="text-slate-500">
                    We expanded our services to include commercial property
                    management, broadening our expertise and client base.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    2018 - Technology Integration
                  </h3>
                  <p className="text-slate-500">
                    We implemented cutting-edge property management software to
                    enhance our service delivery and client communication.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    2020 - Award Recognition
                  </h3>
                  <p className="text-slate-500">
                    Trust Property Management was recognized as the
                    &quot;Property Management Company of the Year&quot; by the
                    Regional Real Estate Association.
                  </p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Present - Continued Growth
                  </h3>
                  <p className="text-slate-500">
                    Today, we continue to grow our portfolio and enhance our
                    services, staying committed to our founding principles of
                    integrity, transparency, and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dedicated professionals committed to exceptional service
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/images/male-user.png"
                      width={128}
                      height={128}
                      alt="John Doe"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-sm text-slate-500">CEO & Founder</p>
                  </div>
                  <p className="text-sm text-slate-500 text-center">
                    With over 20 years of experience in real estate and property
                    management, John leads our team with vision and expertise.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/images/female-user.png"
                      width={128}
                      height={128}
                      alt="Jane Smith"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-bold">Jane Smith</h3>
                    <p className="text-sm text-slate-500">
                      Operations Director
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 text-center">
                    Jane oversees all operational aspects of our business,
                    ensuring smooth and efficient service delivery to all our
                    clients.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/images/male-user.png"
                      width={128}
                      height={128}
                      alt="Michael Johnson"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-bold">Michael Johnson</h3>
                    <p className="text-sm text-slate-500">
                      Maintenance Manager
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 text-center">
                    Michael leads our maintenance team, coordinating all
                    property maintenance and repair services with precision and
                    care.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Core Values
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Shield className="h-12 w-12 text-slate-900" />
                  <h3 className="text-xl font-bold">Integrity</h3>
                  <p className="text-sm text-slate-500 text-center">
                    We conduct our business with honesty, transparency, and
                    ethical practices, building trust with every interaction.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Star className="h-12 w-12 text-slate-900" />
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-sm text-slate-500 text-center">
                    We strive for excellence in every aspect of our service,
                    continuously improving to exceed client expectations.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Heart className="h-12 w-12 text-slate-900" />
                  <h3 className="text-xl font-bold">Customer Support</h3>
                  <p className="text-sm text-slate-500 text-center">
                    We are committed to providing exceptional customer service,
                    addressing client needs with care and attention.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Zap className="h-12 w-12 text-slate-900" />
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-sm text-slate-500 text-center">
                    We embrace technology and innovative solutions to enhance
                    our services and improve client experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
