"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Heart className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Health Vault</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions about Health Vault? We're here to help. Reach out to our friendly support team.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                Send us a Message
              </CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your question or concern..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">For general inquiries and support</p>
                <a href="mailto:support@healthvault.com" className="text-blue-600 hover:underline font-medium">
                  support@healthvault.com
                </a>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-green-600" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Speak with our support team</p>
                <a href="tel:+1-800-HEALTH" className="text-green-600 hover:underline font-medium">
                  +1 (800) 432-5844
                </a>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-purple-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-600" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600">
                  <p>Health Vault Technologies</p>
                  <p>123 Innovation Drive</p>
                  <p>San Francisco, CA 94105</p>
                  <p>United States</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Is my health data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we use bank-level encryption and comply with HIPAA regulations to ensure your health data is
                  completely secure and private.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Can I share data with my doctor?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can easily export your health records or share specific information with your healthcare
                  providers.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Is Health Vault free to use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer a free tier with basic features. Premium plans with advanced features are available for users
                  who need more functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">How do I get started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simply create a free account, verify your email, and start adding your health information. Our guided
                  setup makes it easy!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">Medical Emergency?</h3>
          <p className="text-red-700 mb-6">
            If you're experiencing a medical emergency, please call emergency services immediately.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="destructive" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Call 911 (US)
            </Button>
            <Button variant="outline" size="lg" className="border-red-300 text-red-700 bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Services
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
