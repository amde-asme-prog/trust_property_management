"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to help. Reach out to us with any questions or inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-slate-500">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <Card>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-12">
                      <div className="rounded-full bg-green-100 p-3">
                        <svg
                          className="h-6 w-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Thank You!</h3>
                      <p className="text-center text-slate-500">
                        Your message has been sent successfully. We'll get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            placeholder="Your email"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-slate-500">You can also reach us using the information below.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Phone
                    </CardTitle>
                    <CardDescription>Call us directly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">(123) 456-7890</p>
                    <p className="text-sm text-slate-500">Monday to Friday, 9am to 5pm</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Email
                    </CardTitle>
                    <CardDescription>Send us an email</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">info@trustpm.com</p>
                    <p className="text-sm text-slate-500">We'll respond as soon as possible</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Office Location
                  </CardTitle>
                  <CardDescription>Visit us in person</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">123 Property Lane, Suite 100</p>
                  <p className="text-lg font-medium">Anytown, ST 12345</p>
                  <p className="text-sm text-slate-500 mt-2">Monday to Friday, 9am to 5pm</p>
                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
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
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                  <CardDescription>Follow us on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
