// "use client"

// import { ProtectedRoute } from "@/components/protected-route"
// import { useAuth } from "@/contexts/auth-context"
// import { useFirestore } from "@/hooks/use-firestore"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import { Heart, LogOut, Plus, User, Calendar, Pill, BarChart3 } from "lucide-react"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// interface Medication {
//   id: string
//   name: string
//   dosage: string
//   times: string[]
//   endDate: string
//   taken: { [key: string]: boolean }
//   userId: string
//   createdAt: string
// }

// interface Appointment {
//   id: string
//   doctorName: string
//   specialty: string
//   date: string
//   time: string
//   userId: string
//   createdAt: string
// }

// interface HealthReading {
//   id: string
//   type: string
//   value: string
//   date: string
//   userId: string
//   createdAt: string
// }

// export default function DashboardPage() {
//   return (
//     <ProtectedRoute>
//       <DashboardContent />
//     </ProtectedRoute>
//   )
// }

// function DashboardContent() {
//   const { user, logout } = useAuth()
//   const { data: medications } = useFirestore<Medication>("medications")
//   const { data: appointments } = useFirestore<Appointment>("appointments")
//   const { data: readings } = useFirestore<HealthReading>("healthReadings")

//   const today = new Date().toISOString().split("T")[0]
//   const now = new Date()

//   // Calculate today's medication progress
//   const todaysMedications = medications.filter((med) => new Date(med.endDate) >= now)
//   const totalDosesToday = todaysMedications.reduce((total, med) => total + med.times.length, 0)
//   const takenDosesToday = todaysMedications.reduce((total, med) => {
//     return total + med.times.filter((time) => med.taken?.[today + "-" + time]).length
//   }, 0)
//   const medicationProgress = totalDosesToday > 0 ? (takenDosesToday / totalDosesToday) * 100 : 0

//   // Get upcoming appointments
//   const upcomingAppointments = appointments
//     .filter((apt) => new Date(`${apt.date}T${apt.time}`) >= now)
//     .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime())
//     .slice(0, 3)

//   // Get recent health readings
//   const recentReadings = readings
//     .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
//     .slice(0, 3)

//   const handleLogout = async () => {
//     await logout()
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Heart className="w-8 h-8 text-blue-600 mr-3" />
//               <h1 className="text-xl font-bold text-gray-900">Health Vault</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <User className="w-5 h-5 text-gray-500" />
//                 <span className="text-sm text-gray-700">{user?.displayName || user?.email}</span>
//               </div>
//               <Button variant="outline" size="sm" onClick={handleLogout}>
//                 <LogOut className="w-4 h-4 mr-2" />
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="space-y-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">Health Dashboard</h2>
//             <p className="text-gray-600">Overview of your health management</p>
//           </div>

//           {/* Quick Stats */}
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Today's Medications</CardTitle>
//                 <Pill className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">
//                   {takenDosesToday}/{totalDosesToday}
//                 </div>
//                 <p className="text-xs text-muted-foreground">{medicationProgress.toFixed(0)}% completed</p>
//                 <Progress value={medicationProgress} className="mt-2" />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
//                 <Calendar className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
//                 <p className="text-xs text-muted-foreground">
//                   {upcomingAppointments.length > 0
//                     ? `Next: ${new Date(upcomingAppointments[0].date).toLocaleDateString()}`
//                     : "No appointments scheduled"}
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Health Readings</CardTitle>
//                 <Heart className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{readings.length}</div>
//                 <p className="text-xs text-muted-foreground">
//                   {recentReadings.length > 0
//                     ? `Last: ${new Date(recentReadings[0].createdAt).toLocaleDateString()}`
//                     : "No readings recorded"}
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
//                 <Plus className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <Button size="sm" className="w-full">
//                     Add Medication
//                   </Button>
//                   <Button size="sm" variant="outline" className="w-full bg-transparent">
//                     Book Appointment
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Welcome Message for New Users */}
//           {medications.length === 0 && appointments.length === 0 && readings.length === 0 && (
//             <Alert>
//               <Heart className="h-4 w-4" />
//               <AlertTitle>Welcome to Health Vault!</AlertTitle>
//               <AlertDescription>
//                 Start managing your health by adding your first medication, booking an appointment, or recording a
//                 health reading. Your data is securely stored in Firebase Firestore.
//               </AlertDescription>
//             </Alert>
//           )}

//           <div className="grid gap-6 md:grid-cols-2">
//             {/* Recent Medications */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Pill className="w-5 h-5" />
//                   Recent Medications
//                 </CardTitle>
//                 <CardDescription>Your latest medication entries</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {medications.length === 0 ? (
//                   <div className="text-center py-8">
//                     <Pill className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                     <p className="text-gray-500">No medications added yet</p>
//                     <Button className="mt-4">Add First Medication</Button>
//                   </div>
//                 ) : (
//                   <div className="space-y-3">
//                     {medications.slice(0, 3).map((med) => (
//                       <div key={med.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                         <div>
//                           <div className="font-medium">{med.name}</div>
//                           <div className="text-sm text-gray-600">{med.dosage}</div>
//                         </div>
//                         <Badge variant="outline">{med.times.length} times/day</Badge>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             {/* Recent Appointments */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Calendar className="w-5 h-5" />
//                   Recent Appointments
//                 </CardTitle>
//                 <CardDescription>Your latest appointment bookings</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {appointments.length === 0 ? (
//                   <div className="text-center py-8">
//                     <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                     <p className="text-gray-500">No appointments scheduled</p>
//                     <Button className="mt-4">Book First Appointment</Button>
//                   </div>
//                 ) : (
//                   <div className="space-y-3">
//                     {appointments.slice(0, 3).map((appointment) => (
//                       <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                         <div>
//                           <div className="font-medium">{appointment.doctorName}</div>
//                           <div className="text-sm text-gray-600">{appointment.specialty}</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm font-medium">{new Date(appointment.date).toLocaleDateString()}</div>
//                           <div className="text-xs text-gray-500">{appointment.time}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Recent Health Readings */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <BarChart3 className="w-5 h-5" />
//                 Recent Health Readings
//               </CardTitle>
//               <CardDescription>Your latest health measurements</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {readings.length === 0 ? (
//                 <div className="text-center py-8">
//                   <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <p className="text-gray-500">No health readings recorded</p>
//                   <Button className="mt-4">Add First Reading</Button>
//                 </div>
//               ) : (
//                 <div className="space-y-3">
//                   {readings.slice(0, 5).map((reading) => (
//                     <div key={reading.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                       <div>
//                         <div className="font-medium capitalize">{reading.type.replace("_", " ")}</div>
//                         <div className="text-sm text-gray-600">{new Date(reading.date).toLocaleDateString()}</div>
//                       </div>
//                       <div className="text-right">
//                         <div className="font-bold">{reading.value}</div>
//                         <div className="text-xs text-gray-500">
//                           {reading.type === "blood_pressure"
//                             ? "mmHg"
//                             : reading.type === "blood_sugar"
//                               ? "mg/dL"
//                               : reading.type === "heart_rate"
//                                 ? "bpm"
//                                 : reading.type === "temperature"
//                                   ? "°F"
//                                   : "lbs"}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Firebase Connection Status */}
//           <Card>
//             <CardHeader>
//               <CardTitle>🔥 Firebase Connected!</CardTitle>
//               <CardDescription>
//                 Your Health Vault is now connected to Firebase with real-time data storage and authentication.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center space-x-2">
//                 <Badge variant="default">Live Database</Badge>
//                 <Badge variant="secondary">Real-time Sync</Badge>
//                 <Badge variant="outline">Secure Authentication</Badge>
//               </div>
//               <p className="text-sm text-gray-600 mt-4">
//                 Project ID: health--vault | All your health data is securely stored and synchronized across devices.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   )
// }




"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/contexts/auth-context"
import { useFirestore } from "@/hooks/use-firestore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, LogOut, User, Calendar, Pill, BarChart3, Settings, Bell } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AddMedicationDialog } from "@/components/add-medication-dialog"
import { AddAppointmentDialog } from "@/components/add-appointment-dialog"
import {AddHealthReadingDialog }from '../../components/add-health-reading-dialog'

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

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
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
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Health Vault</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
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
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.displayName?.split(" ")[0] || "User"}!</h2>
            <p className="text-blue-100">Here's your health overview for today</p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-shadow">
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

            <Card className="hover:shadow-lg transition-shadow">
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

            <Card className="hover:shadow-lg transition-shadow">
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <AddMedicationDialog />
                  <AddAppointmentDialog />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Welcome Message for New Users */}
          {medications.length === 0 && appointments.length === 0 && readings.length === 0 && (
            <Alert className="border-blue-200 bg-blue-50">
              <Heart className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Welcome to Health Vault!</AlertTitle>
              <AlertDescription className="text-blue-700">
                Start managing your health by adding your first medication, booking an appointment, or recording a
                health reading. Your data is securely stored and synchronized in real-time.
              </AlertDescription>
            </Alert>
          )}
            
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Medications */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5 text-blue-600" />
                  Recent Medications
                </CardTitle>
                <CardDescription>Your latest medication entries</CardDescription>
              </CardHeader>
              <CardContent>
                {medications.length === 0 ? (
                  <div className="text-center py-8">
                    <Pill className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No medications added yet</p>
                    <AddMedicationDialog />
                  </div>
                ) : (
                  <div className="space-y-3">
                    {medications.slice(0, 3).map((med) => (
                      <div
                        key={med.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <div className="font-medium">{med.name}</div>
                          <div className="text-sm text-gray-600">{med.dosage}</div>
                        </div>
                        <Badge variant="outline">{med.times.length} times/day</Badge>
                      </div>
                    ))}
                    {medications.length > 3 && (
                      <Button variant="ghost" className="w-full">
                        View All Medications ({medications.length})
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Appointments */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Recent Appointments
                </CardTitle>
                <CardDescription>Your latest appointment bookings</CardDescription>
              </CardHeader>
              <CardContent>
                {appointments.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No appointments scheduled</p>
                    <AddAppointmentDialog />
                  </div>
                ) : (
                  <div className="space-y-3">
                    {appointments.slice(0, 3).map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
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
                    {appointments.length > 3 && (
                      <Button variant="ghost" className="w-full">
                        View All Appointments ({appointments.length})
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Health Readings */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Recent Health Readings
              </CardTitle>
              <CardDescription>Your latest health measurements and vital signs</CardDescription>
            </CardHeader>
            <CardContent>
              {readings.length === 0 ? (
                <div className="text-center py-8">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">No health readings recorded</p>
                  <AddHealthReadingDialog />
                </div>
              ) : (
                <div className="space-y-3">
                  {readings.slice(0, 5).map((reading) => (
                    <div
                      key={reading.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <div className="font-medium capitalize">{reading.type.replace("_", " ")}</div>
                        <div className="text-sm text-gray-600">{new Date(reading.date).toLocaleDateString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{reading.value}</div>
                        <div className="text-xs text-gray-500">
                          {reading.type === "blood_pressure"
                            ? "mmHg"
                            : reading.type === "blood_sugar"
                              ? "mg/dL"
                              : reading.type === "heart_rate"
                                ? "bpm"
                                : reading.type === "temperature"
                                  ? "°F"
                                  : "lbs"}
                        </div>
                      </div>
                    </div>
                  ))}
                  {readings.length > 5 && (
                    <Button variant="ghost" className="w-full">
                      View All Readings ({readings.length})
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Firebase Connection Status */}
          <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-800">🔥 Firebase Connected Successfully!</CardTitle>
              <CardDescription className="text-green-700">
                Your Health Vault is powered by Firebase with real-time data storage, authentication, and analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default" className="bg-green-600">
                  Live Database
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Real-time Sync
                </Badge>
                <Badge variant="outline" className="border-purple-200 text-purple-700">
                  Secure Auth
                </Badge>
                <Badge variant="outline" className="border-orange-200 text-orange-700">
                  Analytics
                </Badge>
              </div>
              <div className="text-sm text-green-700 space-y-1">
                <p>
                  <strong>Project ID:</strong> health--vault
                </p>
                <p>
                  <strong>Status:</strong> All systems operational
                </p>
                <p>
                  <strong>Data Sync:</strong> Real-time across all devices
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
