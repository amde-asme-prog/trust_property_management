import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export default function FaqsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* FAQs Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What services does Trust Property Management offer?
                </AccordionTrigger>
                <AccordionContent>
                  Trust Property Management provides a full range of services,
                  including residential and commercial property management,
                  financial management, and maintenance solutions. Our services
                  include tenant screening, rent collection, property
                  inspections, maintenance coordination, financial reporting,
                  and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do you screen potential tenants?
                </AccordionTrigger>
                <AccordionContent>
                  Our tenant screening process is thorough and includes credit
                  checks, background checks, employment verification, income
                  verification, rental history review, and personal references.
                  This comprehensive approach helps us select reliable tenants
                  who will care for your property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What are your management fees?
                </AccordionTrigger>
                <AccordionContent>
                  Our management fees vary depending on the type of property,
                  the services required, and the complexity of management. We
                  offer competitive rates and transparent fee structures. Please
                  contact us for a personalized quote based on your specific
                  needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do you handle maintenance requests?
                </AccordionTrigger>
                <AccordionContent>
                  We have a streamlined process for handling maintenance
                  requests. Tenants can submit requests through our online
                  portal, and our team promptly assesses and addresses each
                  issue. For emergency situations, we offer 24/7 support to
                  ensure immediate response.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How often will I receive financial reports?
                </AccordionTrigger>
                <AccordionContent>
                  Property owners receive detailed financial reports on a
                  monthly basis. These reports include income, expenses, and
                  other relevant financial information. All reports are
                  accessible through our secure client portal for your
                  convenience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What areas do you serve?</AccordionTrigger>
                <AccordionContent>
                  Trust Property Management serves the greater metropolitan area
                  and surrounding suburbs. Please contact us to confirm if your
                  property location is within our service area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  How do I get started with your services?
                </AccordionTrigger>
                <AccordionContent>
                  Getting started is easy. Simply contact us through our
                  website, by phone, or by email to schedule a consultation.
                  We&apos;ll discuss your needs, provide information about our
                  services, and develop a customized management plan for your
                  property.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/resources/faqs">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
