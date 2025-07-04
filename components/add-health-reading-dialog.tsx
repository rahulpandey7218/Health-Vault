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
import { Activity, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface HealthReading {
  id: string
  type: string
  value: string
  date: string
  userId: string
  createdAt: string
}

export function AddHealthReadingDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState("")
  const [value, setValue] = useState("")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const { addItem } = useFirestore<HealthReading>("healthReadings")
  const { toast } = useToast()

  const readingTypes = [
    { value: "blood_pressure", label: "Blood Pressure", unit: "mmHg", placeholder: "120/80" },
    { value: "blood_sugar", label: "Blood Sugar", unit: "mg/dL", placeholder: "100" },
    { value: "heart_rate", label: "Heart Rate", unit: "bpm", placeholder: "72" },
    { value: "temperature", label: "Temperature", unit: "°F", placeholder: "98.6" },
    { value: "weight", label: "Weight", unit: "lbs", placeholder: "150" },
    { value: "height", label: "Height", unit: "ft", placeholder: "5.8" },
  ]

  const selectedType = readingTypes.find((t) => t.value === type)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!type || !value || !date) return

    setLoading(true)
    try {
      await addItem({
        type,
        value,
        date,
      } as Omit<HealthReading, "id">)

      toast({
        title: "Health Reading Added",
        description: `${selectedType?.label} reading has been recorded.`,
      })

      setType("")
      setValue("")
      setDate(new Date().toISOString().split("T")[0])
      setOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add health reading. Please try again.",
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
          <Activity className="w-4 h-4 mr-2" />
          Add Health Reading
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Health Reading</DialogTitle>
          <DialogDescription>Record a new health measurement or vital sign.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="type">Reading Type</Label>
              <Select value={type} onValueChange={setType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select reading type" />
                </SelectTrigger>
                <SelectContent>
                  {readingTypes.map((reading) => (
                    <SelectItem key={reading.value} value={reading.value}>
                      {reading.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="value">Value {selectedType && `(${selectedType.unit})`}</Label>
              <Input
                id="value"
                placeholder={selectedType?.placeholder || "Enter value"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Add Reading
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
