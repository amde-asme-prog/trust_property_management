"use client";

import type React from "react";
import { useParams } from "next/navigation";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Bath,
  Bed,
  Calendar,
  Check,
  Home,
  MapPin,
  Share,
  Heart,
} from "lucide-react";

// Mock property data
const propertyData = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    type: "Apartment",
    status: "For Rent",
    price: 1800,
    priceType: "month",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    address: "123 Main St, Downtown, Anytown",
    description:
      "Luxurious downtown apartment with modern amenities and stunning city views. This spacious 2-bedroom unit features an open floor plan, high ceilings, and floor-to-ceiling windows that flood the space with natural light. The gourmet kitchen is equipped with stainless steel appliances, quartz countertops, and a breakfast bar. The primary bedroom includes a walk-in closet and an en-suite bathroom with a soaking tub and separate shower. Additional features include hardwood floors throughout, in-unit laundry, central air conditioning, and a private balcony with city views. Building amenities include a 24-hour doorman, fitness center, rooftop terrace, and resident lounge.",
    features: [
      "Elevator",
      "Gym",
      "Parking",
      "Air Conditioning",
      "Pet Friendly",
      "In-unit Laundry",
      "Dishwasher",
      "Hardwood Floors",
      "Balcony",
      "Doorman",
      "Rooftop Terrace",
      "Storage",
    ],
    amenities: {
      interior: [
        "Central Air",
        "Dishwasher",
        "Hardwood Floors",
        "Walk-in Closets",
        "Washer/Dryer",
      ],
      exterior: ["Balcony", "Elevator", "Doorman", "Garage Parking"],
      community: [
        "Fitness Center",
        "Rooftop Terrace",
        "Resident Lounge",
        "Package Service",
      ],
    },
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    agent: {
      name: "Jane Smith",
      phone: "(123) 456-7890",
      email: "jane.smith@trustpm.com",
      image: "/placeholder.svg?height=150&width=150",
    },
    featured: true,
    yearBuilt: 2018,
    availableFrom: "2023-12-01",
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    type: "Penthouse",
    status: "For Sale",
    price: 1200000,
    priceType: "total",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3000,
    address: "101 Skyline Dr, Downtown, Anytown",
    description:
      "Stunning penthouse with panoramic city views and private rooftop terrace. This exceptional 3-bedroom, 3.5-bathroom residence occupies the entire top floor of a premier luxury building. The grand living space features soaring 12-foot ceilings, a gas fireplace, and walls of glass that showcase breathtaking city and water views. The chef's kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a large center island. The primary suite includes a sitting area, custom walk-in closets, and a spa-like bathroom with a freestanding tub and oversized shower. Two additional en-suite bedrooms provide comfortable accommodations for family or guests. A private elevator opens directly into the foyer. The crowning feature is a private 1,500 sq ft rooftop terrace with an outdoor kitchen, fire pit, and 360-degree views. Additional features include smart home technology, wine storage, and three parking spaces.",
    features: [
      "Rooftop Terrace",
      "Floor-to-ceiling Windows",
      "Smart Home",
      "Concierge",
      "Private Elevator",
      "Fireplace",
      "Wine Cellar",
      "Panoramic Views",
      "Gourmet Kitchen",
      "Walk-in Closets",
      "Spa Bathroom",
      "Multiple Parking Spaces",
    ],
    amenities: {
      interior: [
        "Smart Home Technology",
        "Gas Fireplace",
        "Wine Storage",
        "Custom Closets",
        "Spa Bathrooms",
        "Gourmet Kitchen",
      ],
      exterior: [
        "Private Rooftop Terrace",
        "Private Elevator",
        "Balconies",
        "Multiple Parking Spaces",
      ],
      community: [
        "24/7 Concierge",
        "Security System",
        "Fitness Center",
        "Swimming Pool",
        "Valet Parking",
      ],
    },
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    agent: {
      name: "Michael Johnson",
      phone: "(123) 456-7891",
      email: "michael.johnson@trustpm.com",
      image: "/placeholder.svg?height=150&width=150",
    },
    featured: true,
    yearBuilt: 2020,
    availableFrom: "Immediate",
  },
];

export default function PropertyDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { id } = useParams();

  // Find the property by ID
  const property = propertyData.find(
    (item) => item.id === parseInt(id as string)
  );

  // If property not found, show error
  if (!property) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Property Not Found</h1>
          <p className="text-slate-500">
            The property you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Button asChild>
            <Link href="/listings">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Listings
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Format price display
  const formatPrice = (price: number, type: string) => {
    if (type === "month") {
      return `$${price.toLocaleString()}/month`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted:", contactForm);
    setIsContactFormOpen(false);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle scheduling logic here
    console.log("Viewing scheduled");
    setIsScheduleOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/listings" className="hover:text-slate-900">
              Listings
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <section className="w-full py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <div className="flex items-center text-slate-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <Badge
                className={`mr-2 ${
                  property.status === "For Rent"
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
              >
                {property.status}
              </Badge>
              <p className="text-2xl font-bold ml-2">
                {formatPrice(property.price, property.priceType)}
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={property.images[activeImage] || "/placeholder.svg"}
                  alt={property.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {property.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg ${
                    index === activeImage ? "ring-2 ring-slate-900" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Overview */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <Bed className="h-6 w-6 mx-auto text-slate-700" />
                      <p className="mt-2 font-medium">
                        {property.bedrooms} Bedrooms
                      </p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <Bath className="h-6 w-6 mx-auto text-slate-700" />
                      <p className="mt-2 font-medium">
                        {property.bathrooms} Bathrooms
                      </p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <Home className="h-6 w-6 mx-auto text-slate-700" />
                      <p className="mt-2 font-medium">{property.area} sq ft</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <Calendar className="h-6 w-6 mx-auto text-slate-700" />
                      <p className="mt-2 font-medium">
                        Built {property.yearBuilt}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-slate-600 whitespace-pre-line">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Features & Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle>Features & Amenities</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="interior">Interior</TabsTrigger>
                      <TabsTrigger value="exterior">Exterior</TabsTrigger>
                      <TabsTrigger value="community">Community</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="pt-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {property.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="interior" className="pt-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {property.amenities.interior.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="exterior" className="pt-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {property.amenities.exterior.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="community" className="pt-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {property.amenities.community.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98776548459448!3d40.75798797932632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629321204919!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Agent</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={property.agent.image || "/placeholder.svg"}
                        alt={property.agent.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-slate-500">
                        {property.agent.phone}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button
                      className="w-full"
                      onClick={() => setIsContactFormOpen(true)}
                    >
                      Contact Agent
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsScheduleOpen(true)}
                    >
                      Schedule Viewing
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-slate-500">Property Type</span>
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-slate-500">Status</span>
                      <span className="font-medium">{property.status}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-slate-500">Year Built</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-slate-500">Available From</span>
                      <span className="font-medium">
                        {property.availableFrom}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Share & Save */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to Listings */}
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/listings">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Listings
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Agent</DialogTitle>
            <DialogDescription>
              Fill out the form below to get in touch with {property.agent.name}{" "}
              about this property.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleContactFormSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleContactFormChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={contactForm.email}
                onChange={handleContactFormChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={contactForm.phone}
                onChange={handleContactFormChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleContactFormChange}
                placeholder={`I'm interested in ${property.title}...`}
                required
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactFormOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Schedule Viewing Dialog */}
      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Schedule a Viewing</DialogTitle>
            <DialogDescription>
              Choose a date and time to view {property.title}.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleScheduleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="viewing-name">Name</Label>
              <Input id="viewing-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="viewing-email">Email</Label>
              <Input id="viewing-email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="viewing-phone">Phone</Label>
              <Input id="viewing-phone" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="viewing-date">Preferred Date</Label>
              <Input id="viewing-date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="viewing-time">Preferred Time</Label>
              <Input id="viewing-time" type="time" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="viewing-notes">Additional Notes</Label>
              <Textarea id="viewing-notes" />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsScheduleOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Schedule</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
