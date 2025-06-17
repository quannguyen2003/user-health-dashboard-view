
import { useState } from "react"
import { AdminSidebar } from "@/components/AdminSidebar"
import { Dashboard } from "@/components/Dashboard"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="lg:hidden mr-4"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">
                Bảng điều khiển Admin
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Chào mừng trở lại, Admin
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default Admin
