"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Calendar, Pill, BarChart3, Loader2 } from "lucide-react"
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
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Health Vault</h1>
            </div>
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Personal
            <span className="text-blue-600"> Health Vault</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Securely manage your health records, medications, appointments, and track your wellness journey all in one
            place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Health Journey
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Sign In to Continue
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card>
            <CardHeader>
              <Pill className="w-10 h-10 text-blue-600 mb-4" />
              <CardTitle>Medication Management</CardTitle>
              <CardDescription>Track your medications, set reminders, and never miss a dose again.</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="w-10 h-10 text-blue-600 mb-4" />
              <CardTitle>Appointment Scheduling</CardTitle>
              <CardDescription>
                Keep track of all your doctor appointments and medical visits in one place.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
              <CardTitle>Health Analytics</CardTitle>
              <CardDescription>Monitor your health trends and get insights from your medical data.</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your health data is encrypted and stored securely with enterprise-grade security.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="w-10 h-10 text-blue-600 mb-4" />
              <CardTitle>Health Records</CardTitle>
              <CardDescription>
                Store and organize all your medical records, test results, and health documents.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">AI</span>
              </div>
              <CardTitle>AI Health Insights</CardTitle>
              <CardDescription>
                Get personalized health recommendations powered by artificial intelligence.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to take control of your health?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of users who trust Health Vault with their health management.
          </p>
          <Link href="/signup">
            <Button size="lg">Create Your Free Account</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
