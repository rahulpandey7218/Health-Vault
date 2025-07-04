"use client"

import { useState, useEffect } from "react"
import { collection, doc, addDoc, updateDoc, deleteDoc, query, where, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuth } from "@/contexts/auth-context"

export function useFirestore<T>(collectionName: string) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      setData([])
      setLoading(false)
      return
    }

    const q = query(collection(db, collectionName), where("userId", "==", user.uid), orderBy("createdAt", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as T[]

      setData(items)
      setLoading(false)
    })

    return unsubscribe
  }, [user, collectionName])

  const addItem = async (item: Omit<T, "id">) => {
    if (!user) return

    await addDoc(collection(db, collectionName), {
      ...item,
      userId: user.uid,
      createdAt: new Date().toISOString(),
    })
  }

  const updateItem = async (id: string, updates: Partial<T>) => {
    await updateDoc(doc(db, collectionName, id), updates)
  }

  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, collectionName, id))
  }

  return {
    data,
    loading,
    addItem,
    updateItem,
    deleteItem,
  }
}
