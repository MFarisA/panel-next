// "use client"

// import * as React from "react"
// import { User, Lock, Paintbrush, X } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
// import { Separator } from "@/components/ui/separator"

// import { ProfileSettings, type ProfileFormValues } from "./settings/profile-settings"
// import { PasswordSettings, type PasswordFormValues } from "./settings/password-settings"
// import { AppearanceSettings, type AppearanceFormValues } from "./settings/appearance-settings"
// import { DeleteAccountDialog } from "./settings/delete-account-dialog"

// type SettingsTab = "profile" | "password" | "appearance"

// export function SettingsDialog() {
//   const [open, setOpen] = React.useState(false)
//   const [activeTab, setActiveTab] = React.useState<SettingsTab>("profile")
//   const [showDeleteAccountDialog, setShowDeleteAccountDialog] = React.useState(false)
//   const [isMobile, setIsMobile] = React.useState(false)

//   // Check if we're on mobile
//   React.useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     // Initial check
//     checkIfMobile()

//     // Add event listener
//     window.addEventListener("resize", checkIfMobile)

//     // Cleanup
//     return () => window.removeEventListener("resize", checkIfMobile)
//   }, [])

//   function onProfileSubmit(data: ProfileFormValues) {
//     console.log("Profile data:", data)
//     // Save profile data
//   }

//   function onPasswordSubmit(data: PasswordFormValues) {
//     console.log("Password data:", data)
//     // Update password
//   }

//   function onAppearanceSubmit(data: AppearanceFormValues) {
//     console.log("Appearance data:", data)
//     // Update appearance settings
//   }

//   function handleDeleteAccount() {
//     console.log("Account deleted")
//     // Here you would call your API to delete the account
//     setShowDeleteAccountDialog(false)
//     setOpen(false)
//   }

//   return (
//     <>
//       <Button onClick={() => setOpen(true)}>Settings</Button>
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-[900px] p-0 max-h-[90vh] md:h-[600px] overflow-hidden">
//           <DialogTitle className="sr-only">Settings</DialogTitle>
//           <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
//             <X className="h-4 w-4" />
//             <span className="sr-only">Close</span>
//           </DialogClose>
//           <SidebarProvider>
//             <div className="flex flex-col md:flex-row h-full">
//               <Sidebar collapsible={isMobile ? "icon" : "none"} className="md:w-[240px] border-r">
//                 <SidebarContent>
//                   <SidebarGroup>
//                     <SidebarGroupContent>
//                       <SidebarMenu>
//                         <SidebarMenuItem>
//                           <SidebarMenuButton onClick={() => setActiveTab("profile")} isActive={activeTab === "profile"}>
//                             <User className="h-4 w-4 md:mr-2" />
//                             <span className="hidden md:inline">Profile</span>
//                           </SidebarMenuButton>
//                         </SidebarMenuItem>
//                         <SidebarMenuItem>
//                           <SidebarMenuButton
//                             onClick={() => setActiveTab("password")}
//                             isActive={activeTab === "password"}
//                           >
//                             <Lock className="h-4 w-4 md:mr-2" />
//                             <span className="hidden md:inline">Password</span>
//                           </SidebarMenuButton>
//                         </SidebarMenuItem>
//                         <SidebarMenuItem>
//                           <SidebarMenuButton
//                             onClick={() => setActiveTab("appearance")}
//                             isActive={activeTab === "appearance"}
//                           >
//                             <Paintbrush className="h-4 w-4 md:mr-2" />
//                             <span className="hidden md:inline">Appearance</span>
//                           </SidebarMenuButton>
//                         </SidebarMenuItem>
//                       </SidebarMenu>
//                     </SidebarGroupContent>
//                   </SidebarGroup>
//                 </SidebarContent>
//               </Sidebar>
//               <div className="flex-1 overflow-auto p-4 md:p-6">
//                 <div className="flex items-center mb-4">
//                   {isMobile && <SidebarTrigger className="mr-2" />}
//                   <h2 className="text-lg font-semibold">
//                     {activeTab === "profile" && "Profile Settings"}
//                     {activeTab === "password" && "Password Settings"}
//                     {activeTab === "appearance" && "Appearance Settings"}
//                   </h2>
//                 </div>
//                 <Separator className="mb-6" />

//                 {activeTab === "profile" && (
//                   <ProfileSettings
//                     onSubmit={onProfileSubmit}
//                     onDeleteAccount={() => setShowDeleteAccountDialog(true)}
//                   />
//                 )}

//                 {activeTab === "password" && <PasswordSettings onSubmit={onPasswordSubmit} />}

//                 {activeTab === "appearance" && <AppearanceSettings onSubmit={onAppearanceSubmit} />}
//               </div>
//             </div>
//           </SidebarProvider>
//         </DialogContent>
//       </Dialog>

//       <DeleteAccountDialog
//         isOpen={showDeleteAccountDialog}
//         onClose={() => setShowDeleteAccountDialog(false)}
//         onConfirm={handleDeleteAccount}
//       />
//     </>
//   )
// }

