import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      {/* Blog Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Blog
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed with our latest articles and insights
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blog post image"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>June 12, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>John Doe</span>
                  </div>
                </div>
                <CardTitle>5 Tips for First-Time Property Investors</CardTitle>
                <CardDescription>
                  Learn the essential strategies for successful property
                  investment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Investing in property for the first time can be daunting. In
                  this article, we share five essential tips to help you make
                  informed decisions and maximize your returns.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/resources/blog/5-tips-for-first-time-property-investors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blog post image"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>May 28, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Jane Smith</span>
                  </div>
                </div>
                <CardTitle>
                  Understanding Tenant Rights and Responsibilities
                </CardTitle>
                <CardDescription>
                  A comprehensive guide for both landlords and tenants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Clear understanding of tenant rights and responsibilities is
                  crucial for a harmonious landlord-tenant relationship. This
                  guide covers the essential legal aspects every property owner
                  should know.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/resources/blog/understanding-tenant-rights">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Blog post image"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>April 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Michael Johnson</span>
                  </div>
                </div>
                <CardTitle>
                  Preventative Maintenance: Saving Money in the Long Run
                </CardTitle>
                <CardDescription>
                  How regular maintenance can prevent costly repairs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Regular preventative maintenance is key to preserving property
                  value and avoiding expensive emergency repairs. Learn how a
                  proactive approach can save you money over time.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/resources/blog/preventative-maintenance">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/resources/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
