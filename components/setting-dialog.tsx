"use client"

import * as React from "react"
import { User, Lock, SunMoon, X } from "lucide-react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import { ProfileSettings, type ProfileFormValues } from "./settings/profile-settings"
import { PasswordSettings, type PasswordFormValues } from "./settings/password-settings"
import { AppearanceSettings, type AppearanceFormValues } from "./settings/appearance-settings"
import { DeleteAccountDialog } from "./settings/delete-account-dialog"

type SettingsTab = "profile" | "password" | "appearance"

export function SettingsDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [activeTab, setActiveTab] = React.useState<SettingsTab>("profile")
  const [showDeleteAccountDialog, setShowDeleteAccountDialog] = React.useState(false)

  function onProfileSubmit(data: ProfileFormValues) {
    console.log("Profile data:", data)
  }

  function onPasswordSubmit(data: PasswordFormValues) {
    console.log("Password data:", data)
  }

  function onAppearanceSubmit(data: AppearanceFormValues) {
    console.log("Appearance data:", data)
  }

  function handleDeleteAccount() {
    console.log("Account deleted")
    setShowDeleteAccountDialog(false)
    onOpenChange(false)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[900px] p-0 h-[600px] overflow-hidden">
          <DialogTitle className="sr-only">Settings</DialogTitle>
          <SidebarProvider>
            <div className="flex h-full">
              <Sidebar collapsible="none" className="w-[240px] border-r">
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton onClick={() => setActiveTab("profile")} isActive={activeTab === "profile"}>
                            <User className="h-4 w-4 mr-2" />
                            <span>Profile</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            onClick={() => setActiveTab("password")}
                            isActive={activeTab === "password"}
                          >
                            <Lock className="h-4 w-4 mr-2" />
                            <span>Password</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            onClick={() => setActiveTab("appearance")}
                            isActive={activeTab === "appearance"}
                          >
                            <SunMoon className="h-4 w-4 mr-2" />
                            <span>Appearance</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <div className="flex-1 overflow-auto p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">
                    {activeTab === "profile" && "Profile Settings"}
                    {activeTab === "password" && "Password Settings"}
                    {activeTab === "appearance" && "Appearance Settings"}
                  </h2>
                  <button
                    className="hover:bg-muted rounded p-1"
                    onClick={() => onOpenChange(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <Separator className="mb-6" />

                {activeTab === "profile" && (
                  <ProfileSettings
                    onSubmit={onProfileSubmit}
                    onDeleteAccount={() => setShowDeleteAccountDialog(true)}
                  />
                )}

                {activeTab === "password" && <PasswordSettings onSubmit={onPasswordSubmit} />}
                {activeTab === "appearance" && <AppearanceSettings onSubmit={onAppearanceSubmit} />}
              </div>
            </div>
          </SidebarProvider>
        </DialogContent>
      </Dialog>

      <DeleteAccountDialog
        isOpen={showDeleteAccountDialog}
        onClose={() => setShowDeleteAccountDialog(false)}
        onConfirm={handleDeleteAccount}
      />
    </>
  )
}
