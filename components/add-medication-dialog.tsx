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
import { Plus, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

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

export function AddMedicationDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [dosage, setDosage] = useState("")
  const [frequency, setFrequency] = useState("")
  const [endDate, setEndDate] = useState("")
  const { addItem } = useFirestore<Medication>("medications")
  const { toast } = useToast()

  const frequencyOptions = {
    "1": ["08:00"],
    "2": ["08:00", "20:00"],
    "3": ["08:00", "14:00", "20:00"],
    "4": ["08:00", "12:00", "16:00", "20:00"],
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !dosage || !frequency || !endDate) return

    setLoading(true)
    try {
      await addItem({
        name,
        dosage,
        times: frequencyOptions[frequency as keyof typeof frequencyOptions],
        endDate,
        taken: {},
      } as Omit<Medication, "id">)

      toast({
        title: "Medication Added",
        description: `${name} has been added to your medications.`,
      })

      setName("")
      setDosage("")
      setFrequency("")
      setEndDate("")
      setOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add medication. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Medication
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Medication</DialogTitle>
          <DialogDescription>Add a new medication to your health vault.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Medication Name</Label>
              <Input
                id="name"
                placeholder="e.g., Aspirin"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                id="dosage"
                placeholder="e.g., 100mg"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="frequency">Frequency per day</Label>
              <Select value={frequency} onValueChange={setFrequency} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Once daily</SelectItem>
                  <SelectItem value="2">Twice daily</SelectItem>
                  <SelectItem value="3">Three times daily</SelectItem>
                  <SelectItem value="4">Four times daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Add Medication
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
