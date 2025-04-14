"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock equipment data
const equipmentData = [
  {
    id: 1,
    name: "Industrial Generator",
    category: "Power Equipment",
    location: "Warehouse A",
    description: "High-capacity industrial generator suitable for construction sites and large events.",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Commercial HVAC System",
    category: "Climate Control",
    location: "Warehouse B",
    description: "Energy-efficient HVAC system for commercial buildings and office spaces.",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Security Camera System",
    category: "Security",
    location: "Warehouse A",
    description: "Advanced security camera system with motion detection and remote monitoring capabilities.",
    available: false,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Commercial Refrigerator",
    category: "Appliances",
    location: "Warehouse C",
    description: "Large-capacity commercial refrigerator suitable for restaurants and food service businesses.",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Industrial Pressure Washer",
    category: "Cleaning Equipment",
    location: "Warehouse B",
    description: "High-pressure cleaning system for exterior surfaces and industrial cleaning applications.",
    available: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Commercial Lawn Mower",
    category: "Landscaping",
    location: "Warehouse C",
    description: "Professional-grade lawn mower for commercial landscaping and property maintenance.",
    available: false,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function InventoryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [locationFilter, setLocationFilter] = useState<string>("all")
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("all")

  // Get unique categories and locations for filters
  const categories = ["all", ...new Set(equipmentData.map((item) => item.category))]
  const locations = ["all", ...new Set(equipmentData.map((item) => item.location))]

  // Filter equipment based on search term and filters
  const filteredEquipment = equipmentData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    const matchesLocation = locationFilter === "all" || item.location === locationFilter
    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "available" && item.available) ||
      (availabilityFilter === "unavailable" && !item.available)

    return matchesSearch && matchesCategory && matchesLocation && matchesAvailability
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Equipment Inventory</h1>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our available equipment and maintenance resources
              </p>
            </div>
          </div>
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
                placeholder="Search equipment..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="unavailable">Unavailable</SelectItem>
              </SelectContent>
            </Select>
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

      {/* Equipment Listing */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          {filteredEquipment.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-slate-500">No equipment found matching your criteria.</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((item) => (
                <Card key={item.id}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                    <div
                      className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full ${item.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>
                      {item.category} • {item.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500">{item.description}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="font-medium text-green-600">$75/day</p>
                      <Badge variant="outline" className={item.available ? "bg-green-100" : "bg-red-100"}>
                        {item.available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex space-x-2">
                      <Button asChild className="flex-1">
                        <Link href={`/inventory/${item.id}`}>View</Link>
                      </Button>
                      {item.available && (
                        <Button variant="outline" className="flex-1">
                          Rent Now
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEquipment.map((item) => (
                <Card key={item.id}>
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/4 aspect-video md:aspect-square overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                      <div
                        className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full ${item.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {item.available ? "Available" : "Unavailable"}
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-sm text-slate-500">
                          {item.category} • {item.location}
                        </p>
                        <p className="text-sm text-slate-500">{item.description}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <p className="font-medium text-green-600">$75/day</p>
                          <Badge variant="outline" className={item.available ? "bg-green-100" : "bg-red-100"}>
                            {item.available ? "Available" : "Unavailable"}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button asChild>
                          <Link href={`/inventory/${item.id}`}>View Details</Link>
                        </Button>
                        {item.available && <Button variant="outline">Rent Now</Button>}
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
  )
}
