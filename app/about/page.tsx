import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Award, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            About <span className="text-blue-600">Health Vault</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're on a mission to revolutionize personal health management by making it simple, secure, and accessible
            for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card className="p-8">
            <CardHeader>
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals to take control of their health journey through innovative technology,
                comprehensive health management tools, and secure data storage that puts privacy first.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader>
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                A world where everyone has easy access to their health information, can make informed decisions, and
                maintain better health outcomes through personalized, technology-driven solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Health Vault?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center p-6">
              <CardHeader>
                <Shield className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <CardTitle>Bank-Level Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your health data is protected with enterprise-grade encryption and security measures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Users className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <CardTitle>Family Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manage health records for your entire family from a single, easy-to-use platform.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Award className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <CardTitle>Award Winning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recognized by healthcare professionals and technology experts worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Thousands</h2>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Health Records</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  Your health data belongs to you. We never sell or share your personal information.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously improve our platform with cutting-edge technology and user feedback.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  Health management should be simple and accessible to everyone, regardless of technical expertise.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Your health data is always available when you need it, with 99.9% uptime guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Health Vault has completely transformed how I manage my family's health records. It's intuitive and
                  secure."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Mother of 3</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "As a healthcare professional, I recommend Health Vault to all my patients. It's comprehensive and
                  user-friendly."
                </p>
                <div className="font-semibold">Dr. Michael Chen</div>
                <div className="text-sm text-gray-500">Family Physician</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The medication reminders and appointment tracking features have been life-changing for managing my
                  chronic condition."
                </p>
                <div className="font-semibold">Robert Davis</div>
                <div className="text-sm text-gray-500">Diabetes Patient</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Health Management?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of users who trust Health Vault with their health journey.
          </p>
          <Link href="/signup">
            <Button size="lg" className="mr-4">
              Start Your Free Account
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
