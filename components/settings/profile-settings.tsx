"use client"
import { Check, Upload, AlertCircle } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>

interface ProfileSettingsProps {
  defaultValues?: ProfileFormValues
  onSubmit: (data: ProfileFormValues) => void
  onDeleteAccount: () => void
}

export function ProfileSettings({
  defaultValues = {
    name: "John Doe",
    email: "john.doe@example.com",
  },
  onSubmit,
  onDeleteAccount,
}: ProfileSettingsProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Change avatar
          </Button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4">
            <Check className="h-4 w-4 mr-2" />
            Save changes
          </Button>
        </form>
      </Form>

      <div className="mt-10 pt-6 border-t">
        <h3 className="text-lg font-medium text-destructive flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          Delete Account
        </h3>
        <p className="text-sm text-muted-foreground mt-2 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button variant="destructive" onClick={onDeleteAccount}>
          Delete Account
        </Button>
      </div>
    </div>
  )
}

