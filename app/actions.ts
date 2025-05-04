"use server"

import { revalidatePath } from "next/cache"

export async function sendContactForm(formData: FormData) {

  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Get form data
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Validate form data
  if (!name || !email || !message) {
    throw new Error("Пожалуйста, заполните все обязательные поля")
  }

  // In a real application, you would send this data to your backend or email service
  console.log("Form submission:", { name, email, phone, message })

  // For demonstration purposes, we'll just return success
  revalidatePath("/")
  return { success: true }
}

export async function createServerOrder(formData: FormData) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Get form data
  const name = formData.get("name")
  const email = formData.get("email")
  const plan = formData.get("plan")
  const os = formData.get("os")
  const period = formData.get("period")

  // Validate form data
  if (!name || !email || !plan || !os || !period) {
    throw new Error("Пожалуйста, заполните все обязательные поля")
  }

  // In a real application, you would send this data to your backend
  console.log("Server order:", { name, email, plan, os, period })

  // For demonstration purposes, we'll just return success
  revalidatePath("/")
  return { success: true, orderId: Math.floor(Math.random() * 1000000) }
}
