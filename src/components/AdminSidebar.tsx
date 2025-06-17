
import { useState } from "react"
import { BarChart3, Users, Activity, Settings, Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface AdminSidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: BarChart3 },
  { title: "Người dùng", url: "/admin/users", icon: Users },
  { title: "Thống kê bệnh", url: "/admin/diseases", icon: Activity },
  { title: "Cài đặt", url: "/admin/settings", icon: Settings },
]

export function AdminSidebar({ isOpen, onToggle }: AdminSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-lg
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none
        w-64
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
