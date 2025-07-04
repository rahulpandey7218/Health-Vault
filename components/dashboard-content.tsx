"use client"
import { useAuth } from "@/contexts/auth-context"
import { useFirestore } from "@/hooks/use-firestore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Pill, Heart, LogOut, Plus, User } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Medication {
  id: string
  name: string
  dosage: string
  times: string[]
  endDate: string
  taken: { [key: string]: boolean }
  userId: string
  createdAt: string
}

interface Appointment {
  id: string
  doctorName: string
  specialty: string
  date: string
  time: string
  userId: string
  createdAt: string
}

interface HealthReading {
  id: string
  type: string
  value: string
  date: string
  userId: string
  createdAt: string
}

export function DashboardContent() {
  const { user, logout } = useAuth()
  const { data: medications } = useFirestore<Medication>("medications")
  const { data: appointments } = useFirestore<Appointment>("appointments")
  const { data: readings } = useFirestore<HealthReading>("healthReadings")

  const today = new Date().toISOString().split("T")[0]
  const now = new Date()

  // Calculate today's medication progress
  const todaysMedications = medications.filter((med) => new Date(med.endDate) >= now)
  const totalDosesToday = todaysMedications.reduce((total, med) => total + med.times.length, 0)
  const takenDosesToday = todaysMedications.reduce((total, med) => {
    return total + med.times.filter((time) => med.taken?.[today + "-" + time]).length
  }, 0)
  const medicationProgress = totalDosesToday > 0 ? (takenDosesToday / totalDosesToday) * 100 : 0

  // Get upcoming appointments
  const upcomingAppointments = appointments
    .filter((apt) => new Date(`${apt.date}T${apt.time}`) >= now)
    .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime())
    .slice(0, 3)

  // Get recent health readings
  const recentReadings = readings
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3)

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Health Vault</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-700">{user?.displayName || user?.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Health Dashboard</h2>
            <p className="text-gray-600">Overview of your health management</p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Medications</CardTitle>
                <Pill className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {takenDosesToday}/{totalDosesToday}
                </div>
                <p className="text-xs text-muted-foreground">{medicationProgress.toFixed(0)}% completed</p>
                <Progress value={medicationProgress} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
                <p className="text-xs text-muted-foreground">
                  {upcomingAppointments.length > 0
                    ? `Next: ${new Date(upcomingAppointments[0].date).toLocaleDateString()}`
                    : "No appointments scheduled"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Health Readings</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{readings.length}</div>
                <p className="text-xs text-muted-foreground">
                  {recentReadings.length > 0
                    ? `Last: ${new Date(recentReadings[0].createdAt).toLocaleDateString()}`
                    : "No readings recorded"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
                <Plus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button size="sm" className="w-full">
                    Add Medication
                  </Button>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Welcome Message for New Users */}
          {medications.length === 0 && appointments.length === 0 && readings.length === 0 && (
            <Alert>
              <Heart className="h-4 w-4" />
              <AlertTitle>Welcome to Health Vault!</AlertTitle>
              <AlertDescription>
                Start managing your health by adding your first medication, booking an appointment, or recording a
                health reading.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Medications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5" />
                  Recent Medications
                </CardTitle>
                <CardDescription>Your latest medication entries</CardDescription>
              </CardHeader>
              <CardContent>
                {medications.length === 0 ? (
                  <div className="text-center py-8">
                    <Pill className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No medications added yet</p>
                    <Button className="mt-4">Add First Medication</Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {medications.slice(0, 3).map((med) => (
                      <div key={med.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{med.name}</div>
                          <div className="text-sm text-gray-600">{med.dosage}</div>
                        </div>
                        <Badge variant="outline">{med.times.length} times/day</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Appointments
                </CardTitle>
                <CardDescription>Your latest appointment bookings</CardDescription>
              </CardHeader>
              <CardContent>
                {appointments.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No appointments scheduled</p>
                    <Button className="mt-4">Book First Appointment</Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {appointments.slice(0, 3).map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{appointment.doctorName}</div>
                          <div className="text-sm text-gray-600">{appointment.specialty}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{new Date(appointment.date).toLocaleDateString()}</div>
                          <div className="text-xs text-gray-500">{appointment.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
