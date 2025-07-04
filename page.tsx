"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Calendar, Pill, BarChart3, Loader2, Users, Award, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Health Vault</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            🎉 Now with Firebase Integration - Real-time Health Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Personal
            <span className="text-blue-600"> Health Vault</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Securely manage your health records, medications, appointments, and track your wellness journey all in one
            place. Powered by Firebase for real-time synchronization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Health Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Sign In to Continue
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">✅ Free to start • ✅ HIPAA Compliant • ✅ 256-bit Encryption</p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="text-center">
              <Pill className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Medication Management</CardTitle>
              <CardDescription>
                Track your medications, set reminders, and never miss a dose again with smart notifications.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Appointment Scheduling</CardTitle>
              <CardDescription>
                Keep track of all your doctor appointments and medical visits in one organized place.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="text-center">
              <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Health Analytics</CardTitle>
              <CardDescription>
                Monitor your health trends and get insights from your medical data with visual charts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your health data is encrypted and stored securely with enterprise-grade security measures.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="text-center">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <CardTitle>Health Records</CardTitle>
              <CardDescription>
                Store and organize all your medical records, test results, and health documents digitally.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <CardTitle>AI Health Insights</CardTitle>
              <CardDescription>
                Get personalized health recommendations powered by artificial intelligence and machine learning.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Healthcare Professionals</h2>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">50,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">1M+</div>
              <div className="text-gray-600">Health Records</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Health Vault?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Synchronization</h3>
                <p className="text-gray-600">
                  Your health data syncs instantly across all your devices with Firebase technology.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                <p className="text-gray-600">
                  We meet all healthcare privacy and security requirements to protect your data.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Intuitive interface designed for users of all ages and technical backgrounds.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Family Sharing</h3>
                <p className="text-gray-600">Manage health records for your entire family from a single account.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your health?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of users who trust Health Vault with their health management. Start your journey to better
            health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Create Your Free Account
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">No credit card required • Free forever plan available</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-blue-400 mr-2" />
                <span className="font-bold text-lg">Health Vault</span>
              </div>
              <p className="text-gray-400 mb-4">Your trusted partner in personal health management.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    HIPAA Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Health Vault. All rights reserved. Made with ❤️ for better health.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
