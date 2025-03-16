"use client"

import * as React from "react"
import {
    Home,
    Settings,
    SunMoon,
    UserRoundPen,
} from "lucide-react"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
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

const data = {
    nav: [
        { name: "Settings", icon: Settings },
        { name: "Profile", icon: UserRoundPen },
        { name: "Password", icon: Home },
        { name: "Appearance", icon: SunMoon },
    ],
}

// Komponen untuk setiap halaman
function SettingsPage() {
    return <div className="p-4">⚙️ This is the Settings page</div>
}

function ProfilePage() {
    return <div className="p-4">👤 This is the Profile page</div>
}

function PasswordPage() {
    return <div className="p-4">🔑 This is the Password page</div>
}

function AppearancePage() {
    return <div className="p-4">🎨 This is the Appearance page</div>
}

export function SettingsDialog({
    open,
    onOpenChange,
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) {
    const [activePage, setActivePage] = React.useState("Settings")

    const renderPage = () => {
        switch (activePage) {
            case "Settings":
                return <SettingsPage />
            case "Profile":
                return <ProfilePage />
            case "Password":
                return <PasswordPage />
            case "Appearance":
                return <AppearancePage />
            default:
                return null
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
                <DialogTitle className="sr-only">Settings</DialogTitle>
                <DialogDescription className="sr-only">
                    Customize your settings here.
                </DialogDescription>
                <SidebarProvider className="items-start">
                    <Sidebar collapsible="none" className="hidden md:flex">
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {data.nav.map((item) => (
                                            <SidebarMenuItem key={item.name}>
                                                <SidebarMenuButton
                                                    onClick={() => setActivePage(item.name)}
                                                    isActive={activePage === item.name}
                                                >
                                                    <item.icon />
                                                    <span>{item.name}</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>

                    <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
                        <div className="flex flex-1 flex-col overflow-y-auto">
                            {renderPage()}
                        </div>
                    </main>
                </SidebarProvider>
            </DialogContent>
        </Dialog>
    )
}
