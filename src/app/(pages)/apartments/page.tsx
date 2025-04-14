"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Home, MapPin, Search, Grid, List } from "lucide-react";

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
      "Luxurious downtown apartment with modern amenities and stunning city views.",
    features: [
      "Elevator",
      "Gym",
      "Parking",
      "Air Conditioning",
      "Pet Friendly",
    ],
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 2,
    title: "Spacious Family Home",
    type: "House",
    status: "For Sale",
    price: 450000,
    priceType: "total",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    address: "456 Oak Ave, Suburbia, Anytown",
    description:
      "Beautiful family home with large backyard in a quiet neighborhood.",
    features: ["Garage", "Garden", "Fireplace", "Basement", "Central Heating"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    type: "Studio",
    status: "For Rent",
    price: 950,
    priceType: "month",
    bedrooms: 0,
    bathrooms: 1,
    area: 550,
    address: "789 Pine St, Midtown, Anytown",
    description: "Cozy studio apartment perfect for young professionals.",
    features: ["Furnished", "Utilities Included", "Laundry", "Security"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
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
      "Stunning penthouse with panoramic city views and private rooftop terrace.",
    features: [
      "Rooftop Terrace",
      "Floor-to-ceiling Windows",
      "Smart Home",
      "Concierge",
      "Private Elevator",
    ],
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 5,
    title: "Charming Cottage",
    type: "House",
    status: "For Rent",
    price: 2200,
    priceType: "month",
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    address: "222 Willow Ln, Historic District, Anytown",
    description:
      "Charming historic cottage with modern updates and beautiful garden.",
    features: [
      "Garden",
      "Hardwood Floors",
      "Fireplace",
      "Updated Kitchen",
      "Porch",
    ],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 6,
    title: "Modern Townhouse",
    type: "Townhouse",
    status: "For Sale",
    price: 375000,
    priceType: "total",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    address: "333 Cedar Blvd, Eastside, Anytown",
    description:
      "Modern townhouse with open floor plan and energy-efficient features.",
    features: [
      "Garage",
      "Energy Efficient",
      "Community Pool",
      "Balcony",
      "Storage",
    ],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
];

export default function ListingsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [listingType, setListingType] = useState<"all" | "rent" | "buy">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500000]);
  const [bedroomsFilter, setBedroomsFilter] = useState<string>("any");
  const [sortOption, setSortOption] = useState<string>("featured");

  // Filter properties based on filters
  const filteredProperties = propertyData.filter((property) => {
    // Filter by listing type (rent/buy/all)
    const matchesListingType =
      listingType === "all" ||
      (listingType === "rent" && property.status === "For Rent") ||
      (listingType === "buy" && property.status === "For Sale");

    // Filter by search term
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by property type
    const matchesPropertyType =
      propertyType === "all" || property.type === propertyType;

    // Filter by price range
    const matchesPriceRange =
      property.price >= priceRange[0] && property.price <= priceRange[1];

    // Filter by bedrooms
    const matchesBedrooms =
      bedroomsFilter === "any" ||
      (bedroomsFilter === "0" && property.bedrooms === 0) ||
      (bedroomsFilter === "1" && property.bedrooms === 1) ||
      (bedroomsFilter === "2" && property.bedrooms === 2) ||
      (bedroomsFilter === "3" && property.bedrooms === 3) ||
      (bedroomsFilter === "4+" && property.bedrooms >= 4);

    return (
      matchesListingType &&
      matchesSearch &&
      matchesPropertyType &&
      matchesPriceRange &&
      matchesBedrooms
    );
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return b.id - a.id;
      case "featured":
      default:
        return b.featured ? 1 : -1;
    }
  });

  // Format price display
  const formatPrice = (price: number, type: string) => {
    if (type === "month") {
      return `$${price.toLocaleString()}/month`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Apartments
              </h1>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find your perfect apartment for rent or purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listing Type Tabs */}
      <section className="w-full bg-white border-b">
        <div className="container px-4 md:px-6">
          <Tabs
            defaultValue="all"
            value={listingType}
            onValueChange={(value) => setListingType(value as any)}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Properties</TabsTrigger>
              <TabsTrigger value="rent">For Rent</TabsTrigger>
              <TabsTrigger value="buy">For Sale</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                type="search"
                placeholder="Search by location, name..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
                <SelectItem value="Studio">Studio</SelectItem>
                <SelectItem value="Penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>
            <Select value={bedroomsFilter} onValueChange={setBedroomsFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Bedrooms</SelectItem>
                <SelectItem value="0">Studio</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4+">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Price Range</span>
                <span className="text-sm text-slate-500">
                  ${priceRange[0].toLocaleString()} - $
                  {priceRange[1].toLocaleString()}
                </span>
              </div>
              <Slider
                defaultValue={[0, 1500000]}
                max={1500000}
                step={10000}
                value={priceRange}
                onValueChange={(value) =>
                  setPriceRange(value as [number, number])
                }
                className="py-4"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-500">View:</span>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          {sortedProperties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-slate-500">
                No properties found matching your criteria.
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <Badge
                      className={`absolute top-2 left-2 ${
                        property.status === "For Rent"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      {property.status}
                    </Badge>
                    {property.featured && (
                      <Badge className="absolute top-2 right-2 bg-yellow-500">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-bold">{property.title}</h3>
                        <div className="flex items-center text-sm text-slate-500">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          <span>{property.address}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">
                          {formatPrice(property.price, property.priceType)}
                        </p>
                        <p className="text-sm text-slate-500">
                          {property.type}
                        </p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>
                            {property.bedrooms}{" "}
                            {property.bedrooms === 1 ? "Bed" : "Beds"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>
                            {property.bathrooms}{" "}
                            {property.bathrooms === 1 ? "Bath" : "Baths"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Home className="h-4 w-4 mr-1" />
                          <span>{property.area} sq ft</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/listings/${property.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProperties.map((property) => (
                <Card key={property.id}>
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-full md:h-60"
                      />
                      <Badge
                        className={`absolute top-2 left-2 ${
                          property.status === "For Rent"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      >
                        {property.status}
                      </Badge>
                      {property.featured && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold">
                                {property.title}
                              </h3>
                              <div className="flex items-center text-sm text-slate-500 mt-1">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                <span>{property.address}</span>
                              </div>
                            </div>
                            <p className="text-xl font-bold">
                              {formatPrice(property.price, property.priceType)}
                            </p>
                          </div>
                          <p className="mt-2 text-slate-600 line-clamp-2">
                            {property.description}
                          </p>
                          <div className="flex mt-4 space-x-4 text-sm">
                            <div className="flex items-center">
                              <Bed className="h-4 w-4 mr-1" />
                              <span>
                                {property.bedrooms}{" "}
                                {property.bedrooms === 1 ? "Bed" : "Beds"}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Bath className="h-4 w-4 mr-1" />
                              <span>
                                {property.bathrooms}{" "}
                                {property.bathrooms === 1 ? "Bath" : "Baths"}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Home className="h-4 w-4 mr-1" />
                              <span>{property.area} sq ft</span>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {property.features
                              .slice(0, 3)
                              .map((feature, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="bg-slate-100"
                                >
                                  {feature}
                                </Badge>
                              ))}
                            {property.features.length > 3 && (
                              <Badge variant="outline" className="bg-slate-100">
                                +{property.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button asChild>
                            <Link href={`/listings/${property.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
