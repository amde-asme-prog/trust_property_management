"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Download,
  FileText,
  Info,
  MapPin,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

// Mock equipment data
const equipmentData = [
  {
    id: 1,
    name: "Industrial Generator",
    category: "Power Equipment",
    location: "Warehouse A",
    description:
      "High-capacity industrial generator suitable for construction sites and large events.",
    specifications: [
      { name: "Power Output", value: "50 kW" },
      { name: "Fuel Type", value: "Diesel" },
      { name: "Tank Capacity", value: "100 gallons" },
      { name: "Runtime", value: "24 hours at full load" },
      { name: "Noise Level", value: "72 dB" },
      { name: "Dimensions", value: "8' x 4' x 6'" },
      { name: "Weight", value: "2,500 lbs" },
    ],
    features: [
      "Automatic voltage regulation",
      "Low oil shutdown protection",
      "Digital control panel",
      "Weather-resistant enclosure",
      "Trailer-mounted for easy transport",
      "Remote monitoring capability",
    ],
    maintenance: [
      {
        date: "2023-01-15",
        type: "Routine Inspection",
        notes: "All systems functioning properly",
      },
      {
        date: "2023-03-22",
        type: "Oil Change",
        notes: "Replaced oil and filters",
      },
      {
        date: "2023-06-10",
        type: "Major Service",
        notes: "Replaced fuel filters and checked all connections",
      },
    ],
    available: true,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    documents: [
      { name: "User Manual", type: "PDF", size: "2.4 MB" },
      { name: "Maintenance Schedule", type: "PDF", size: "1.1 MB" },
      { name: "Warranty Information", type: "PDF", size: "0.8 MB" },
    ],
  },
];

export default function EquipmentDetailPage() {
  const [activeImage, setActiveImage] = useState(0);

  const { id } = useParams();

  // Find the equipment by ID
  const equipment = equipmentData.find(
    (item) => item.id === parseInt(id as string)
  );

  // If equipment not found, show error
  if (!equipment) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center p-4">
        <div className="text-center space-y-4">
          <XCircle className="h-16 w-16 text-red-500 mx-auto" />
          <h1 className="text-2xl font-bold">Equipment Not Found</h1>
          <p className="text-slate-500">
            The equipment you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Button asChild>
            <Link href="/inventory">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Inventory
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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
            <Link href="/inventory" className="hover:text-slate-900">
              Inventory
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{equipment.name}</span>
          </div>
        </div>
      </div>

      {/* Equipment Details */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={equipment.images[activeImage] || "/placeholder.svg"}
                  alt={equipment.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded-full ${
                    equipment.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {equipment.available ? "Available" : "Unavailable"}
                </div>
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {equipment.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative aspect-video w-24 md:w-32 flex-shrink-0 overflow-hidden rounded-md border ${
                      index === activeImage ? "ring-2 ring-slate-900" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${equipment.name} - Image ${index + 1}`}
                      width={128}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Equipment Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{equipment.name}</h1>
                <div className="flex items-center mt-2 space-x-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <Info className="h-4 w-4 mr-1" />
                    {equipment.category}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {equipment.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-600">{equipment.description}</p>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Key Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {equipment.specifications.slice(0, 6).map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 border-b"
                    >
                      <span className="font-medium">{spec.name}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-4">
                {equipment.available ? (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-medium">Rental Price</p>
                        <p className="text-2xl font-bold text-green-600">
                          $75/day
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-sm">
                        Available
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button className="w-full" size="lg">
                        Rent Now
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        Request Quote
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4 border rounded-lg bg-red-50">
                    <Badge className="bg-red-100 text-red-800 mb-2">
                      Currently Unavailable
                    </Badge>
                    <p className="text-slate-600">
                      This equipment is currently unavailable for rent.
                    </p>
                    <Button variant="outline" className="mt-2">
                      Join Waitlist
                    </Button>
                  </div>
                )}
                <div className="text-sm text-slate-500">
                  Contact us for long-term rental discounts and availability
                  details.
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for Additional Information */}
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="maintenance">
                  Maintenance History
                </TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        Full Specifications
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {equipment.specifications.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-2 border-b"
                          >
                            <span className="font-medium">{spec.name}</span>
                            <span>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        Features & Benefits
                      </h3>
                      <ul className="space-y-2">
                        {equipment.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="maintenance" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        Maintenance History
                      </h3>
                      <div className="space-y-4">
                        {equipment.maintenance.map((record, index) => {
                          const date = new Date(record.date);
                          const formattedDate = date.toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          );

                          return (
                            <div
                              key={index}
                              className="flex items-start space-x-4 p-4 border rounded-lg"
                            >
                              <div className="flex-shrink-0">
                                <Calendar className="h-6 w-6 text-slate-500" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h4 className="font-semibold">
                                    {record.type}
                                  </h4>
                                  <span className="text-sm text-slate-500">
                                    {formattedDate}
                                  </span>
                                </div>
                                <p className="mt-1 text-slate-600">
                                  {record.notes}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="pt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        Documents & Resources
                      </h3>
                      <div className="space-y-2">
                        {equipment.documents.map((doc, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 border rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <FileText className="h-6 w-6 text-slate-500" />
                              <div>
                                <h4 className="font-medium">{doc.name}</h4>
                                <p className="text-sm text-slate-500">
                                  {doc.type} • {doc.size}
                                </p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Back to Inventory */}
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/inventory">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Inventory
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
