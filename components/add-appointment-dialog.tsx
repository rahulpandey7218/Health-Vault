"use client"

import type React from "react"
import { useState } from "react"
import { useFirestore } from "@/hooks/use-firestore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Appointment {
  id: string
  doctorName: string
  specialty: string
  date: string
  time: string
  userId: string
  createdAt: string
}

export function AddAppointmentDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [doctorName, setDoctorName] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const { addItem } = useFirestore<Appointment>("appointments")
  const { toast } = useToast()

  const specialties = [
    "General Physician",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic",
    "Pediatrician",
    "Psychiatrist",
    "Gynecologist",
    "Dentist",
    "Ophthalmologist",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!doctorName || !specialty || !date || !time) return

    setLoading(true)
    try {
      await addItem({
        doctorName,
        specialty,
        date,
        time,
      } as Omit<Appointment, "id">)

      toast({
        title: "Appointment Booked",
        description: `Appointment with ${doctorName} has been scheduled.`,
      })

      setDoctorName("")
      setSpecialty("")
      setDate("")
      setTime("")
      setOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book appointment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-transparent">
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book New Appointment</DialogTitle>
          <DialogDescription>Schedule an appointment with your healthcare provider.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="doctorName">Doctor Name</Label>
              <Input
                id="doctorName"
                placeholder="e.g., Dr. Smith"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Select value={specialty} onValueChange={setSpecialty} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Book Appointment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
